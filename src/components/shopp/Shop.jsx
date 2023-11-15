import { Category } from "./category/Category";
import { ShopItems } from "./shopItems/ShopItems";
import "./ShopMainStyle.scss";



const Shop = ({setPopUpItem,handleIconClick, clickedItem, popUpItem,addItem, chooseFavorite}) => {
  return (
    <div className="shop-Wrapper">
      <Category /> 
      <ShopItems popUpItem={popUpItem} clickedItem={clickedItem} handleIconClick={handleIconClick} setPopUpItem={setPopUpItem} addItem={addItem} chooseFavorite={chooseFavorite}/>
    </div>
  );
};

export { Shop };
