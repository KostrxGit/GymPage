import MoblieNavLinks from "./MobileNavLinks";
import "./navbar.css";

const MobileNav = () => {
  return (
    <nav role="navigation" className="navigation">
      <div className="hamMargin">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <MoblieNavLinks />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
