import "./BannerSlyderStyle.scss";
import banner from "../../../assets/slider-banner.webp";
import { NavLink } from "react-router-dom";

const BannerSlider = () => {
  return (
    <div className="banner-back">
      <img src={banner} alt="banner" />
      <div className="text-container">
        <p className="chloe">THE CHLOE COLLECTION</p>
        <h3 className="project">The Project Jacket</h3>
        <NavLink to="/shop">
          {" "}
          <p className="shop-now">SHOP NOW</p>
        </NavLink>
      </div>
    </div>
  );
};

export { BannerSlider };
