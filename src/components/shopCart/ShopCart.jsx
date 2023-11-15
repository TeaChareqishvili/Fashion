import { ChosenProduct } from "../chosenProduct/ChosenProduct";
import "./ShopCartStyle.scss";

const ShopCart = ({chosenItem,handleRemoveItem}) => {
  return (
    <div className="cart-main-container">
      <div className="chosen-product">
        <div>
            <p>PRODUCT</p>
        </div>
        <div className="product-total">
           <p>PRICE</p>
        </div>
      </div>
      <div className="border"></div>
      <ChosenProduct chosenItem={chosenItem} handleRemoveItem={handleRemoveItem}/>
    </div>
  );
};

export { ShopCart };
