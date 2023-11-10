import "./ShopStyle.scss";
import { info } from "../shopData";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { ShopSize } from "./ShopSize";
import { PriceRange } from "../priceRange/PriceRange";


const Category = () => {
  const [showWomen, setShowWomen] = useState(false);
  const [showMen, setShowMen]=useState(false)
  const [showKids, setShowKids] = useState(false)
  const [showAccessories, setShowAccessories] = useState(false)

  const showMoreWomen = () => {
    setShowWomen(!showWomen); 
  };
  const showMoreMen = () => {
    setShowMen(!showMen); 
  };
  const showMoreKids = () => {
    setShowKids(!showKids); 
  };
  const showMoreAccessories = () => {
    setShowAccessories(!showAccessories); 
  };

  return (
    <div className="category-wrapper">
      <div className="women">
      <h2>CATEGORIES</h2>
        <div className="title"> 
          <h4 className="title-category">Women</h4>
          <MdKeyboardArrowDown className="click" onClick={() => showMoreWomen()} />
        </div>
        {showWomen &&
          info.map((item, id) => (
            <div key={id} className="categories">
              <span>-</span>
              <p className="category">{item.category}</p>
            </div>
          ))}
          <div className="border"></div>
           <div className="title"> 
          <h4 className="title-category">Men</h4>
          <MdKeyboardArrowDown className="click" onClick={() => showMoreMen()} />
        </div>
        {showMen &&
          info.map((item, id) => (
            <div key={id} className="categories">
              <span>-</span>
              <p className="category">{item.category}</p>
            </div>
          ))}
           <div className="border"></div>
           <div className="title"> 
          <h4 className="title-category">Kids</h4>
          <MdKeyboardArrowDown className="click" onClick={() => showMoreKids()} />
        </div>
        {showKids &&
          info.map((item, id) => (
            <div key={id} className="categories">
              <span>-</span>
              <p className="category">{item.category}</p>
            </div>
          ))}
           <div className="border"></div>
            <div className="title"> 
          <h4 className="title-category">Accessories</h4>
          <MdKeyboardArrowDown className="click" onClick={() => showMoreAccessories()} />
        </div>
        {showAccessories &&
          info.map((item, id) => (
            <div key={id} className="categories">
              <span>-</span>
              <p className="category">{item.category}</p>
            </div>
          ))}
           <div className="border"></div>
           <PriceRange/>
           <ShopSize/>
      </div>
    </div>
  );
};

export { Category };
