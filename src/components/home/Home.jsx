import { BannerSlider } from "./bannerSlider/BannerSlider";
import { HomeBanner } from "./homebanner/HomeBanner";
import "./HomeStyles.scss";
import { SummerDiscount } from "./summerDiscount/SummerDiscount";

const Home = () => {
    return(
        <div>
            <HomeBanner/>
            <BannerSlider/>
            <SummerDiscount/> 
        </div>
    )
};

export { Home };
