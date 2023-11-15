import "./BurgerMenu.scss";
import headerLogo from "../../assets/logo.png";
import cart from "../../assets/shopping_cart.svg";
import favorite from "../../assets/favorite_border.png";
import { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BurgerMenu = ({ setBurger, addFavorite, chosenItem }) => {
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
        <div className="mobile-icons">
          <NavLink to="/cat">
            {" "}
            <img src={cart} alt="cart" />
            {chosenItem.length > 0 && (
              <span className="cart-length">{chosenItem.length}</span>
            )}
          </NavLink>
          <NavLink to="/favorite">
            {" "}
            <img src={favorite} alt="favorite" />
            {addFavorite.length > 0 && (
              <span className="favorite-length">{addFavorite.length}</span>
            )}
          </NavLink>
        </div>
        <div className="mobile-fashion">
          <img src={headerLogo} alt="logo" />
        </div>
        {bar && (
          <div className="mobile-navigation" ref={listRef}>
            <ul>
              <NavLink to="/" className="nav-bar">
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


