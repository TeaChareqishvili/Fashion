import { fullData } from "../../allData/AllData";
import "./NewProductStyle.scss";
import { FaStar } from "react-icons/fa";
import { SlBag } from "react-icons/sl";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { SelectedItem } from "../selectedItem/SelectedItem";

const NewProduct = ({showImages,selectedCategory,setClickedItem,setPopUpItem,popUpItem,clickedItem}) => {
 


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
    <div className="product-container"> 
      <div className={`product-list ${showImages ? "fade-in" : "fade-out"}`}>
        {filterData(selectedCategory).map((item, id) => (
          <div key={id} className="product">
            <div className="product-img">
              <img src={item.image} alt="product" />
            </div>
            <p className="description">{item.description}</p>
            <div className="item-rating">
              {[...Array(5)].map((_, id) => (
                <FaStar key={id} className="item-rating-star" />
              ))}
            </div>
            <p className="price">{item.price}</p>
            <div className="absolute">
            <p className={`stock ${item.stock === 'New' ? 'green' : item.stock === 'Sale' ? 'red' : 'black'}`}>
    {item.stock}
  </p>
            </div>
            <div className="icons">
              <div className="icon" onClick={()=>handleIconClick(item)}>
                <BsArrowsAngleExpand className="fa"/>
              </div>
              <div className="icon">
                {" "}
                <AiOutlineHeart className="fa" />
              </div>
              <div className="icon">
                {" "}
                <SlBag className="fa" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {popUpItem && <SelectedItem setPopUpItem={setPopUpItem} clickedItem={clickedItem} />}
    </div>
  );
};

export { NewProduct };
