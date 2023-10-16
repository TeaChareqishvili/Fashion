import { fullData } from "../../allData/AllData";
import "./NewProductStyle.scss";

const NewProduct = () => {

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      shuffleArray(fullData);
  return (
    <div className="product-container">
      <div className="product-list">
        <div>
          <h4>
            <u>NEW</u> PRODUCT
          </h4>
        </div>
        <ul className="nav-list">
          <li>All</li>
          <li>Women's</li>
          <li>Men's</li>
          <li>Kid's</li>
          <li>Accessories</li>
          <li>Cosmetics</li>
        </ul>
      </div>
      <div className="product-list">
        {fullData.map((item,id)=>(
            <div key={id} className="product">
                <div className="product-img">
                <img src={item.image} alt="product"/>
                </div>
                <p>{item.description}</p>
                <p>{item.price}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export { NewProduct };
