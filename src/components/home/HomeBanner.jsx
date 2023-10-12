import "./HomeBannerStyle.scss";
import womenFashion from "../../assets/category1.webp";
import menFashion from "../../assets/category2.webp";
import kidFashion from "../../assets/category3.webp";
import cosmetics from "../../assets/category4.webp";
import accessories from "../../assets/category5.webp";

const HomeBanner = () => {
  return (
    <div className="banner-wrapper">
      <div className="img-wrapper">
        <div className="large-img">
            <img src={womenFashion} alt="women-fashion"/>
            <div className="women-fashion">
                <h3>Women's Fashion</h3>
                <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.</p>
                <p>Shop Now</p>
            </div>
        </div>
        <div className="sml-img">
            <img src={menFashion} alt="fashion"/>
            <img src={kidFashion} alt="fashion"/>
        </div>
        <div  className="sml-img">
            <img src={cosmetics} alt="fashion"/>
            <img src={accessories} alt="fashion"/>
        </div>
      </div>
    </div>
  );
};

export { HomeBanner };
