import { BannerSlider } from "./bannerSlider/BannerSlider";
import { HomeBanner } from "./homebanner/HomeBanner";
import "./HomeStyles.scss";
import { SummerDiscount } from "./summerDiscount/SummerDiscount";
import { SomeTrends } from "./trends/SomeTrends";


const Home = () => {
    return(
        <div>
            <HomeBanner/>
            <BannerSlider/>
            <SomeTrends/>
            <SummerDiscount/> 
        </div>
    )
};

export { Home };
