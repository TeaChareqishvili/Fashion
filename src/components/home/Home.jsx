import { BannerSlider } from "./bannerSlider/BannerSlider";
import { HomeBanner } from "./homebanner/HomeBanner";
import "./HomeStyles.scss";
import { SummerDiscount } from "./summerDiscount/SummerDiscount";
import { SomeTrends } from "./trends/SomeTrends";
import { NewProduct } from "./newProduct/NewProduct";


const Home = ({addItem,clickedItem, chooseFavorite,handleIconClick,popUpItem,setPopUpItem}) => {
    



  return (
    <div>
      <HomeBanner />   
      <NewProduct clickedItem={clickedItem} addItem={addItem} chooseFavorite={chooseFavorite} handleIconClick={handleIconClick} popUpItem={popUpItem} setPopUpItem={setPopUpItem}/>
      <BannerSlider />
      <SomeTrends />
      <SummerDiscount />
    </div>
  );
};

export { Home };
