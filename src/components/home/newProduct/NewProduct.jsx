 import { fullData } from "../../allData/AllData";
import "./NewProductStyle.scss";
import { FaStar } from "react-icons/fa";
import { SlBag } from "react-icons/sl";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { SelectedItem } from "../selectedItem/SelectedItem";
import { useState } from "react";
//  import { useAddFavorites } from "../../hook/saveItems";

const NewProduct = () => {
 
 
  
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showImages, setShowImages] = useState(true);
  const [clickedItem, setClickedItem] = useState(null);
  const [popUpItem, setPopUpItem] = useState(false);

  //  const { addItem } = useAddFavorites();

  // const handleAddCart = (clickedItem) => {
  //   console.log("clicked")
  //   addItem(clickedItem);
   
  // };


  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledData = shuffleArray(fullData);


  const handleCategoryChange = (category) => {
    setShowImages(false);
    setTimeout(() => {
      setSelectedCategory(category);
      setShowImages(true);
    }, 300);
  };

  const filterData = (category) => {
    if (category === "all") {
      return shuffledData;
    }
    return shuffledData.filter((item) => item.type === category);
  };

  const handleIconClick = (clickedItem) => {
    setClickedItem(clickedItem);
    setPopUpItem(true);
  };



  return (
    <div className="product-container"> 
    <div className="product-list-nav">
      <div>
        <h4>
          <u>NEW</u> PRODUCT
        </h4>
      </div>
      <ul className="nav-list">
        <li onClick={() => handleCategoryChange("all")}>All</li>
        <li onClick={() => handleCategoryChange("woman")}>Women's</li>
        <li onClick={() => handleCategoryChange("men")}>Men's</li>
        <li onClick={() => handleCategoryChange("kid")}>Kid's</li>
        <li onClick={() => handleCategoryChange("accessorie")}>Accessories</li>
        <li onClick={() => handleCategoryChange("cosmetics")}>Cosmetics</li>
      </ul>
    </div>
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
                <SlBag  className="fa" />
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
