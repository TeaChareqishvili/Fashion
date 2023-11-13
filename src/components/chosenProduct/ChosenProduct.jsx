import "./ChosenProductStyle.scss";
import { useAddFavorites } from "../hook/saveItems";
import { FaStar } from "react-icons/fa";

const ChosenProduct = () => {
  const { chosenItem } = useAddFavorites();

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
                <p>{item.price}</p>
                <p>amount</p>
                <p>total</p>
              </div>
            </div>
            <div className="border"></div>
          </>
        ))}
    </div>
  );
};

export { ChosenProduct };
