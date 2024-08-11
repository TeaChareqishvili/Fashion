import "./FavoriteStyle.scss";

import { VscChromeClose } from "react-icons/vsc";
import { FaCartArrowDown } from "react-icons/fa";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const FavoriteItems = ({ addFavorite, handleRemoveItemFavorite, addItem }) => {
  const deleteFavorite = (clickedItem) => {
    handleRemoveItemFavorite(clickedItem.id);
  };

  const addFavoriteToCart = (clickedItem) => {
    addItem(clickedItem);
    handleRemoveItemFavorite(clickedItem.id);
  };

  return (
    <div className="favorite-main-wrapper">
      <div className="favorite-items">
        <div>
          <p className="title">Favorite Items</p>
          <p className="title">
            Total <span>{addFavorite.length}</span>
          </p>
        </div>
        <div className="border"></div>

        {addFavorite && addFavorite.length > 0 ? (
          addFavorite.map((item, id) => (
            <div key={id} className="favorite-chosen">
              <div className="each-item">
                <img src={item.image} alt="item" />
                <div className="about-favorite">
                  <p className="title">{item.description}</p>
                  <p>{item.about}</p>
                  <p className="price">${item.price}</p>
                </div>
                <div className="delete-cart">
                  <div className="add-to-cart-icon">
                    {" "}
                    <FaCartArrowDown
                      className="cart"
                      onClick={() => addFavoriteToCart(item)}
                    />
                  </div>

                  <VscChromeClose
                    className="close"
                    onClick={() => deleteFavorite(item)}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-yet">
            {" "}
            <p className="empty">You Have not Chosen Anything Yet</p>{" "}
            <BsEmojiHeartEyesFill className="heart" />
          </div>
        )}
        <div className="discount-card">
          <div className="border"></div>
          <NavLink to="/Fashion">
            {" "}
            <button className="back">BACK SHOPPING</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { FavoriteItems };
