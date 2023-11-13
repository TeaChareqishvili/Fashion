import "./ChosenProductStyle.scss";
import { useAddFavorites } from "../hook/saveItems";

const ChosenProduct = () => {
  const { chosenItem } = useAddFavorites();
  console.log("chosen", chosenItem);
  return (
    <div className="saved-items">
      {chosenItem &&
        chosenItem.map((item, id) => (
          <div key={id} className="items">
            <div className="items-name">
              <img src={item.image} alt="item" />
              <div>
                <p>{item.description}</p>
              </div>
            </div>
            <div>
              <p>{item.price}</p>
              <p>amount</p>
              <p>total</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export { ChosenProduct };
