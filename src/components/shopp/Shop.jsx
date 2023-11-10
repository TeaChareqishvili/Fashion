import { Category } from "./category/Category";
import "./ShopMainStyle.scss";
import { NewProduct } from "../home/newProduct/NewProduct";

const Shop =()=>{

  

    return (
        <div className="shop-Wrapper">
           <Category />
          <NewProduct/>
        </div>
    )
}

export {Shop}