import Icon from "../common/Icon.jsx";
import { company } from "../../data/company.js";

/** Call button pinned to the corner on phones (hidden on desktop, where the header has a CTA). */
export default function FloatingActions() {
  return (
    <a href={company.phones[0].href} className="fab" aria-label={`Call ${company.phones[0].label}`}>
      <Icon name="phone" />
    </a>
  );
}
