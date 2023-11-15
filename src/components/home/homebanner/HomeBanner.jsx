import "./HomeBannerStyle.scss";
import womenFashion from "../../../assets/category1.webp";
import menFashion from "../../../assets/category2.webp";
import cosmetics from "../../../assets/category4.webp";
import kidFashion from "../../../assets/category3.webp";
import accessories from "../../../assets/category5.webp";
import { NavLink } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="banner-wrapper">
      <div className="img-wrapper">
        <div className="large-img">
          <img src={womenFashion} alt="women-fashion" />
          <div className="women-fashion">
            <h3>Women's Fashion</h3>
            <span>
              Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
              incidid-unt labore edolore magna aliquapendisse ultrices gravida.
            </span>
            <NavLink to="/shop">
              {" "}
              <p className="shop-now">Shop Now</p>
            </NavLink>
          </div>
        </div>
        <div className="sml-img">
          <img src={menFashion} alt="fashion" />
          <img src={cosmetics} alt="fashion" />
          <div className="men-fashion">
            <h3>Men's Fashion</h3>
            <span>358 items</span>
            <NavLink to="/shop">
              {" "}
              <p className="shop-now">Shop Now</p>
            </NavLink>
          </div>
          <div className="cosmetic-fashion">
            <h3>Cosmetics</h3>
            <span>159 items</span>
            <NavLink to="/shop">
              {" "}
              <p className="shop-now">Shop Now</p>
            </NavLink>
          </div>
        </div>
        <div className="sml-img">
          <img src={kidFashion} alt="fashion" />
          <img src={accessories} alt="fashion" />
          <div className="men-fashion">
            <h3>Kid's Fashion</h3>
            <span>233 items</span>
            <NavLink to="/shop">
              {" "}
              <p className="shop-now">Shop Now</p>
            </NavLink>
          </div>
          <div className="cosmetic-fashion">
            <h3>Accessroies</h3>
            <span>775 items</span>
            <NavLink to="/shop">
              {" "}
              <p className="shop-now">Shop Now</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeBanner };
