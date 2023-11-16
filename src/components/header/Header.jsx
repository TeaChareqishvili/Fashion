import "./HeaderStyles.scss";
import headerLogo from "../../assets/logo.png";
import cart from "../../assets/shopping_cart.svg";
import favorite from "../../assets/favorite_border.png";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";


const Header = ({chosenItem, addFavorite}) => {
  const [burger, setBurger] = useState(false);

 

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div>
          <NavLink to="/Fashion">
            {" "}
            <img src={headerLogo} alt="logo" />
          </NavLink>
        </div>
        <div className="navigation">
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
          <NavLink to="/cart">
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
        <div className="burger-menu">
          <FaBars
            style={{ width: "25px", height: "25px" }}
            onClick={() => setBurger(true)}
          />
        </div>
      </div>
      {burger && <BurgerMenu addFavorite={addFavorite} chosenItem={chosenItem} setBurger={setBurger} />}
    </div>
  );
};

export { Header };
