import "./FavoriteStyle.scss";
import { useAddFavorites } from "../hook/saveItems";
import { VscChromeClose } from "react-icons/vsc";
import { FaCartArrowDown } from "react-icons/fa";

const FavoriteItems = () => {
  const { addFavorite } = useAddFavorites();

  console.log("favorute", addFavorite);

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
        {addFavorite &&
          addFavorite.map((item, id) => (
            <>
              <div key={id} className="favorite-chosen">
                <div className="each-item">
                  <img src={item.image} alt="item" />
                  <div className="about-favorite">
                    <p className="title">{item.description}</p>
                    <p>{item.about}</p>
                    <p className="price">${item.price}</p>
                  </div>
                  <div className="delete-cart">
                    <FaCartArrowDown className="cart"/>
                    <VscChromeClose className="close" />
                  </div>
                </div>
              </div>
              <div className="border"></div>
            </>
          ))}
      </div>
    </div>
  );
};

export { FavoriteItems };
