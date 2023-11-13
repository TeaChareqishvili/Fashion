import "./BurgerMenu.scss";
import headerLogo from "../../assets/logo.png";
import cart from "../../assets/shopping_cart.svg";
import favorite from "../../assets/favorite_border.png";
import { useRef, useEffect,useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BurgerMenu = ({ setBurger }) => {
  const wrapperRef = useRef(null);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);

  const [bar,setBar] = useState(false)

  useEffect(() => {
    const handleClose = (e) => {
      if (wrapperRef.current && burgerRef.current && menuRef.current) {
        if (
          wrapperRef.current.contains(e.target) &&
          !menuRef.current.contains(e.target)
        ) {
          setBurger(false);
        }
        if (burgerRef.current.contains(e.target)) {
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
    <div className="burger-wrapper" ref={wrapperRef}>
      <div className="menu-wrapper" ref={menuRef}>
        <div className="close" ref={burgerRef}>
          +
        </div>
        <div className="mobile-icons">
          <img src={cart} alt="cart" />
          <img src={favorite} alt="favorite" />
        </div>
        <div className="mobile-fashion">
          <img src={headerLogo} alt="logo"/>
          <p>Menu</p>
          <FaBars className="bar" onClick={()=>setBar(true)}/>
        </div>
        {bar && (
            <div className="mobile-navigation">
                  <ul>
            <NavLink to="/" className="nav-bar">
              {" "}
              <li>HOME</li>
            </NavLink>
            <NavLink to="/cart"  className="nav-bar">
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
        )}
      </div>
    </div>
  );
};

export { BurgerMenu };
