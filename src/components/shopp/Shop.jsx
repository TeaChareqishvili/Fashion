import { Category } from "./category/Category";
import { ShopItems } from "./shopItems/ShopItems";
import "./ShopMainStyle.scss";



const Shop = () => {
  return (
    <div className="shop-Wrapper">
      <Category /> 
      <ShopItems/>
    </div>
  );
};

export { Shop };
