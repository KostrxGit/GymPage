import NavLinks from "./NavLinks";
import logo from "./logo.svg";
import "./navbar.css";
import { useState } from "react";

// TODO: Zmienić całkowicie hamburger menu na jakieś inne

const MobileNav = () => {
  //to change burger clases
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  //toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
  };

  return (
    <div>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class} onClick={updateMenu}></div>
          <div className={burger_class} onClick={updateMenu}></div>
          <div className={burger_class} onClick={updateMenu}></div>
        </div>
        <NavLinks />
      </nav>
      <div className={menu_class}></div>
    </div>
  );
};

export default MobileNav;
