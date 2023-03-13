import { Link } from "react-router-dom";

const MobileNavLinks = () => {
  return (
    <ul id="menu">
      <Link to="/">
        <li className="tekst">Home</li>
      </Link>
      <Link to="/about">
        <li className="tekst">About</li>
      </Link>
      <Link to="/contact">
        <li className="tekst">Contact</li>
      </Link>
      <Link to="/plans">
        <li className="tekst">Plans</li>
      </Link>
    </ul>
  );
};

export default MobileNavLinks;
