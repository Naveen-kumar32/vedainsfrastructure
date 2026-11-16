"""Enhance every photo and stamp the Veda watermark on it.

Clean originals live in source-images/ (not published). This script writes
watermarked copies to public/images/, so it is safe to re-run.
To add a new photo: drop it (.webp/.jpg/.png) into source-images/ and run
    python3 scripts/watermark.py
Output is always .webp with the same base name.
"""
from pathlib import Path
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "source-images"
OUT = ROOT / "public" / "images"
MARK = Image.open(OUT / "Veda_Infrastructure_Watermark_Gray.png").convert("RGBA")
WIDTH_RATIO = 0.22  # watermark width as a share of the photo width
MARGIN_RATIO = 0.02  # gap from the bottom and right edges (~20px on a 1000px-wide photo)
OPACITY = 0.4      # white text opacity
SHADOW = 0.2       # soft dark shadow so the white text also reads on light skies

# The supplied PNG is a faint grey; use only its shape and redraw it as white text with a shadow.
_shape = MARK.getchannel("A").point(lambda a: 255 if a > 4 else 0)


# These sources were already enhanced by hand before enhancement moved into this script.
PRE_ENHANCED = {"highrise-2", "highrise-3", "highrise-4"}


def enhance(img):
    """Gentle clean-up: auto brightness levels, a touch of contrast and colour, then sharpening."""
    # Stretch brightness only (Y channel) so colours keep their natural tone (red soil stays red, not orange).
    y, cb, cr = img.convert("YCbCr").split()
    y = ImageOps.autocontrast(y, cutoff=(0.3, 0.3))
    img = Image.merge("YCbCr", (y, cb, cr)).convert("RGB")
    img = ImageEnhance.Contrast(img).enhance(1.04)
    img = ImageEnhance.Color(img).enhance(1.04)
    return img.filter(ImageFilter.UnsharpMask(radius=1.4, percent=65, threshold=3))


def build_mark(width):
    h = int(_shape.height * width / _shape.width)
    shape = _shape.resize((width, h), Image.LANCZOS)
    blur = max(1, width // 120)
    pad = blur * 3
    out = Image.new("RGBA", (width + pad * 2, h + pad * 2), (0, 0, 0, 0))
    shadow = Image.new("RGBA", out.size, (0, 0, 0, 0))
    shadow.paste((0, 0, 0, int(255 * SHADOW)), (pad + blur // 2, pad + blur // 2), shape)
    out.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(blur)))
    text = Image.new("RGBA", out.size, (0, 0, 0, 0))
    text.paste((255, 255, 255, int(255 * OPACITY)), (pad, pad), shape)
    out.alpha_composite(text)
    return out

for path in sorted(SRC.iterdir()):
    if path.suffix.lower() not in {".webp", ".jpg", ".jpeg", ".png"}:
        continue
    img = Image.open(path).convert("RGB")
    if path.stem not in PRE_ENHANCED:
        img = enhance(img)
    img = img.convert("RGBA")
    w = int(img.width * WIDTH_RATIO)
    mark = build_mark(w)
    margin = max(12, round(img.width * MARGIN_RATIO))
    pos = (img.width - mark.width - margin, img.height - mark.height - margin)
    img.alpha_composite(mark, pos)
    img.convert("RGB").save(OUT / f"{path.stem}.webp", "WEBP", quality=90, method=6)
    print("watermarked", path.name)
