import { Link } from "react-router-dom";
import Icon from "../components/common/Icon.jsx";

export default function NotFound() {
  return (
    <section className="notfound">
      <div>
        <b>404</b>
        <h1>This road isn't built yet</h1>
        <p>The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn btn--primary">Back to Home <Icon name="arrow" /></Link>
      </div>
    </section>
  );
}
