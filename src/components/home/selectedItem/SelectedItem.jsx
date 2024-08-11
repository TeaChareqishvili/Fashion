import "./SelectedItemStyle.scss";
import { AiFillCloseCircle } from "react-icons/ai";

const SelectedItem = ({
  setPopUpItem,
  clickedItem,
  addItem,
  chooseFavorite,
}) => {
  const handleAddCart = () => {
    addItem(clickedItem);
    setTimeout(() => {
      setPopUpItem(false);
    }, 0);
  };

  const handleAddFavorite = () => {
    chooseFavorite(clickedItem);
    setTimeout(() => {
      setPopUpItem(false);
    }, 0);
  };

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
              <p className="description">{clickedItem.about}</p>
              <span className="price">${clickedItem.price}</span>
              <span className="stock">{clickedItem.stock}</span>
            </div>
          </div>
        )}
        <div className="buttons">
          <button onClick={() => handleAddFavorite()}>Add To Favorites</button>
          <button onClick={() => handleAddCart()}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export { SelectedItem };
