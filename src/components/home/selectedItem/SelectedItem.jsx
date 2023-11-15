import "./SelectedItemStyle.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { useAddFavorites } from "../../hook/saveItems";

const SelectedItem = ({ setPopUpItem, clickedItem }) => {
  const { addItem, chooseFavorite } = useAddFavorites();

  const handleAddCart = () => {
   
    addItem(clickedItem);
   
  };

  const handleAddFavorite = ()=>{
     chooseFavorite(clickedItem)
     
  }
  
  // function clearLocalStorage() {
  //   // Clear local storage
  //   localStorage.clear();
  //   // Optionally, perform any additional actions after clearing
  //   console.log("Local storage cleared!");
  // }
  

  return (
    <div className="selected-item-wrapper">
      <div className="selected-item">
        <AiFillCloseCircle
          onClick={() => setPopUpItem(false)}
          className="close"
        />
        {clickedItem && (
          <div className="selected">
            <div className="item-img">
              <img src={clickedItem.image} alt="item-img" />
            </div>
            <div className="content">
              <h5>{clickedItem.description}</h5>
              <p>{clickedItem.about}</p>
              <span className="price">{clickedItem.price}</span>
              <span className="stock">{clickedItem.stock}</span>
            </div>
          </div>
        )}

        <div className="buttons">
          <button onClick={()=>handleAddFavorite()}>Add To Favorites</button>

          <button onClick={() => handleAddCart()}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

//TODO add something

export { SelectedItem };
