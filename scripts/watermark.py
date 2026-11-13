"""Stamp the Veda watermark onto every photo.

Clean originals live in source-images/ (not published). This script writes
watermarked copies to public/images/, so it is safe to re-run.
To add a new photo: drop it (.webp/.jpg/.png) into source-images/ and run
    python3 scripts/watermark.py
Output is always .webp with the same base name.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "source-images"
OUT = ROOT / "public" / "images"
MARK = Image.open(OUT / "Veda_Infrastructure_Watermark_Gray.png").convert("RGBA")
WIDTH_RATIO = 0.5  # watermark width as a share of the photo width
STRENGTH = 2.5     # the PNG itself is very faint (~16% opacity); this boosts it to ~40%
MARK.putalpha(MARK.getchannel("A").point(lambda a: min(255, int(a * STRENGTH))))

for path in sorted(SRC.iterdir()):
    if path.suffix.lower() not in {".webp", ".jpg", ".jpeg", ".png"}:
        continue
    img = Image.open(path).convert("RGBA")
    w = int(img.width * WIDTH_RATIO)
    mark = MARK.resize((w, int(MARK.height * w / MARK.width)), Image.LANCZOS)
    pos = ((img.width - mark.width) // 2, (img.height - mark.height) // 2)
    img.alpha_composite(mark, pos)
    img.convert("RGB").save(OUT / f"{path.stem}.webp", "WEBP", quality=85)
    print("watermarked", path.name)
