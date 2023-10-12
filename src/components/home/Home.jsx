import { HomeBanner } from "./HomeBanner";
import "./HomeStyles.scss";
import { SummerDiscount } from "./SummerDiscount";

const Home = () => {
    return(
        <div>
            <HomeBanner/>
            <SummerDiscount/>
        </div>
    )
};

export { Home };
