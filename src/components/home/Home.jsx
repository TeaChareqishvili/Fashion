import { BannerSlider } from "./bannerSlider/BannerSlider";
import { HomeBanner } from "./homebanner/HomeBanner";
import "./HomeStyles.scss";
import { SummerDiscount } from "./summerDiscount/SummerDiscount";
import { SomeTrends } from "./trends/SomeTrends";
import { NewProduct } from "./newProduct/NewProduct";
import { Products } from "./newProduct/Products";
import { useState } from "react";
import { fullData } from "../allData/AllData";

const Home = () => {
    
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showImages, setShowImages] = useState(true);
  const [clickedItem, setClickedItem] = useState(null);
  const [popUpItem, setPopUpItem] = useState(false);



  const handleCategoryChange = (category) => {
    setShowImages(false);
    console.log("vaaa")
    setTimeout(() => {
      setSelectedCategory(category);
      setShowImages(true);
    }, 300);
  };

  const filterData = (category) => {
    if (category === "all") {
      return fullData;
    }
    return fullData.filter((item) => item.type === category);
  };

  const handleIconClick = (clickedItem) => {
    setClickedItem(clickedItem);
    setPopUpItem(true);
  };

  return (
    <div>
      <HomeBanner />
      <Products
         handleCategoryChange={handleCategoryChange}
         filterData={filterData}
         handleIconClick={handleIconClick}
         clickedItem={clickedItem}
      />
      <NewProduct
        selectedCategory={selectedCategory}
        setShowImages={setShowImages}
        setClickedItem={setClickedItem}
        setPopUpItem={setPopUpItem}
        showImages={showImages}
        popUpItem={popUpItem}
      />
      <BannerSlider />
      <SomeTrends />
      <SummerDiscount />
    </div>
  );
};

export { Home };
