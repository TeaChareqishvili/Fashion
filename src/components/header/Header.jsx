import "./HeaderStyles.scss";
import headerLogo from "../../assets/logo.png";
import cart from "../../assets/shopping_cart.svg";
import favorite from "../../assets/favorite_border.png";
import { NavLink } from "react-router-dom";

const Header = () => {
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
            <NavLink to="/women"  className="nav-bar">
              {" "}
              <li>WOMEN'S</li>
            </NavLink>
            <NavLink to="/men"  className="nav-bar">
              {" "}
              <li>MEN'S</li>
            </NavLink>
            <NavLink to="/blog"  className="nav-bar">
              {" "}
              <li>BLOG</li>
            </NavLink>

            <NavLink to="/contact"  className="nav-bar">
              {" "}
              <li>CONTACT</li>
            </NavLink>
          </ul>
        </div>
        <div className="icons">
          <img src={cart} alt="cart" />
          <img src={favorite} alt="favorite" />
        </div>
      </div>
    </div>
  );
};

export { Header };
