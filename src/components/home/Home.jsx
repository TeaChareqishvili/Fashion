import { BannerSlider } from "./bannerSlider/BannerSlider";
import { HomeBanner } from "./homebanner/HomeBanner";
import "./HomeStyles.scss";
import { SummerDiscount } from "./summerDiscount/SummerDiscount";
import { SomeTrends } from "./trends/SomeTrends";
import { NewProduct } from "./newProduct/NewProduct";


const Home = () => {
    return(
        <div>
            <HomeBanner/>
            <NewProduct/>
            <BannerSlider/>
            <SomeTrends/>
            <SummerDiscount/> 
        </div>
    )
};

export { Home };
