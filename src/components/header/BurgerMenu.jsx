import "./BurgerMenu.scss";
import headerLogo from "../../assets/logo.png";
import { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BurgerMenu = ({ setBurger }) => {
  const listRef = useRef(null);
  const closeRef = useRef(null);
  const mainRef = useRef(null);
  const [bar, setBar] = useState(false);

  setTimeout(() => {
    setBar(true);
  }, 500);

  useEffect(() => {
    const handleClose = (e) => {
      if (mainRef.current && closeRef.current && listRef.current) {
        if (
          closeRef.current.contains(e.target) ||
          listRef.current.contains(e.target)
        ) {
          setBurger(false);
        }
      }
    };

    document.addEventListener("click", handleClose);

    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [setBurger]);

  return (
    <div className="burger-wrapper" ref={mainRef}>
      <div className="menu-wrapper">
        <div className="close" ref={closeRef}>
          +
        </div>
        <div className="mobile-fashion">
          <img src={headerLogo} alt="logo" />
        </div>
        {bar && (
          <div className="mobile-navigation" ref={listRef}>
            <ul>
              <NavLink to="/Fashion" className="nav-bar">
                {" "}
                <li>HOME</li>
              </NavLink>
              <NavLink to="/cart" className="nav-bar">
                {" "}
                <li>CART</li>
              </NavLink>
              <NavLink to="/favorite" className="nav-bar">
                {" "}
                <li>FAVORITE</li>
              </NavLink>
              <NavLink to="/blog" className="nav-bar">
                {" "}
                <li>BLOG</li>
              </NavLink>

              <NavLink to="/contact" className="nav-bar">
                {" "}
                <li>CONTACT</li>
              </NavLink>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export { BurgerMenu };


