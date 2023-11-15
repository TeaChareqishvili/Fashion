import "./ChosenProductStyle.scss";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BsEmojiHeartEyesFill } from "react-icons/bs";

const ChosenProduct = ({ chosenItem, handleRemoveItem }) => {
  const totalPrice = chosenItem.reduce((total, item) => total + item.price, 0);
  const discountPercentage = 20;
  const discountedPrice = totalPrice - (totalPrice * discountPercentage) / 100;

  const handleDelete = (clickedItem) => {
    handleRemoveItem(clickedItem.id);
  };

  return (
    <div className="saved-items">
      {chosenItem &&
        chosenItem.map((item, id) => (
          <>
            <div key={id} className="items">
              <div className="items-name">
                <img src={item.image} alt="item" />
                <div>
                  <p>{item.description}</p>
                  {[...Array(5)].map((_, id) => (
                    <FaStar key={id} className="item-rating-star" />
                  ))}
                </div>
              </div>
              <div className="product-amount">
                <p>${item.price}</p>

                <IoClose onClick={() => handleDelete(item)} className="close" />
              </div>
            </div>
            <div className="border"></div>
          </>
        ))}
      <div className="discount-cart">
        {" "}
        <NavLink to="/">
          {" "}
          <button className="back">BACK SHOPPING</button>
        </NavLink>
        {chosenItem.length > 0 ? (
          <div className="discount">
            <p>
              {" "}
              Sub Total <u>{totalPrice}$</u>{" "}
            </p>
            <p>
              discount <u>20%</u>{" "}
            </p>
            <p>
              Total <span>${discountedPrice}</span>
            </p>
            <button className="pay">PAY</button>
          </div>
        ) : (
          <div>
            <p className="empty-cart">You Have Not Chosen Anything Yet</p>{" "}
            <BsEmojiHeartEyesFill className="heart" />
          </div>
        )}
      </div>
    </div>
  );
};

export { ChosenProduct };
