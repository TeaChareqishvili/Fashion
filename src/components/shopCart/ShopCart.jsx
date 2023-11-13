import { ChosenProduct } from "../chosenProduct/ChosenProduct";
import "./ShopCartStyle.scss";

const ShopCart = () => {
  return (
    <div className="cart-main-container">
      <div className="chosen-product">
        <div>
            <p>PRODUCT</p>
        </div>
        <div className="product-total">
           <p>PRICE</p>
           <p>AMOUNT</p>
           <p>TOTAL</p>
        </div>
      </div>
      <div className="border"></div>
      <ChosenProduct/>
    </div>
  );
};

export { ShopCart };
