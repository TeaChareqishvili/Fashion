import { fullData } from "../../allData/AllData";
import "./NewProductStyle.scss";
import { useState} from "react";
import { FaStar } from "react-icons/fa";

const NewProduct = () => {


  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(fullData);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showImages, setShowImages] = useState(true);
  


  


  const handleCategoryChange = (category) => {
    setShowImages(false);
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




  return (
    <div className="product-container">
      <div className="product-list">
        <div>
          <h4>
            <u>NEW</u> PRODUCT
          </h4>
        </div>
        <ul className="nav-list">
          <li  onClick={() => handleCategoryChange("all")}>All</li>
          <li  onClick={() => handleCategoryChange("woman")} >Women's</li>
          <li  onClick={() => handleCategoryChange("men")}>Men's</li>
          <li  onClick={() => handleCategoryChange("kid")}>Kid's</li>
          <li  onClick={() => handleCategoryChange("accessorie")}>Accessories</li>
          <li  onClick={() => handleCategoryChange("cosmetics")}>Cosmetics</li>
        </ul>
      </div>
        <div  className={`product-list ${showImages ? "fade-in" : "fade-out"}`}>
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
                <p  className='stock'>{item.stock}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export { NewProduct };
