import "./BannerSlyderStyle.scss";
import banner from "../../../assets/slider-banner.webp";


const BannerSlider = () => {
  return (
    <div className="banner-back">
        <img src={banner} alt="banner"/>
      <div className="text-container">
        <p className="chloe">THE CHLOE COLLECTION</p>
        <h3 className="project">The Project Jacket</h3>
        <p className="shop-now">SHOP NOW</p>
      </div>
    </div>
  );
};

export { BannerSlider };
