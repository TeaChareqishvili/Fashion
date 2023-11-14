import "./HeaderStyles.scss";
import headerLogo from "../../assets/logo.png";
import cart from "../../assets/shopping_cart.svg";
import favorite from "../../assets/favorite_border.png";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { useAddFavorites } from "../hook/saveItems";

const Header = () => {
  const [burger, setBurger] = useState(false);

  const { chosenItem } = useAddFavorites();

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div>
          <img src={headerLogo} alt="logo" />
        </div>
        <div className="navigation">
          <ul>
            <NavLink to="/" className="nav-bar">
              {" "}
              <li>HOME</li>
            </NavLink>
            <NavLink to="/cart" className="nav-bar">
              {" "}
              <li>CART</li>
            </NavLink>
            <NavLink to="/men" className="nav-bar">
              {" "}
              <li>MEN'S</li>
            </NavLink>
            <NavLink to="/blog" className="nav-bar">
              {" "}
              <li>BLOG</li>
            </NavLink>
            <NavLink to="/shop" className="nav-bar">
              {" "}
              <li>SHOP</li>
            </NavLink>

            <NavLink to="/contact" className="nav-bar">
              {" "}
              <li>CONTACT</li>
            </NavLink>
          </ul>
        </div>
        <div className="icons">
          <img src={cart} alt="cart" />
          {chosenItem && (
            <span className="cart-length">{chosenItem.length}</span>
          )}

          <img src={favorite} alt="favorite" />
        </div>
        <div className="burger-menu">
          <FaBars
            style={{ width: "25px", height: "25px" }}
            onClick={() => setBurger(true)}
          />
        </div>
      </div>
      {burger && <BurgerMenu setBurger={setBurger} />}
    </div>
  );
};

export { Header };
