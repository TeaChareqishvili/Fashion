import "./ShopItemsStyle.scss";
import { fullData } from "../../allData/AllData";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { SlBag } from "react-icons/sl";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";


const itemsPerPage = 12

const ShopItems = ()=>{

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = fullData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(fullData.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      };


    return (
        <div className="wrapper">
        <div className="shop-items-wrapper">
           {currentItems.map((item,id)=>(
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
             <p className="price">${item.price}</p>
             <div className="absolute">
             <p className={`stock ${item.stock === 'New' ? 'green' : item.stock === 'Sale' ? 'red' : 'black'}`}>
     {item.stock}
   </p>
             </div>
             <div className="icons">
               <div className="icon" >
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
        <div className="buttons">
        {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={currentPage === index + 1 ? "active" : ""}
        >
          {index + 1}
        </button>
      ))}
        </div>
        </div>
    )
}

export {ShopItems}