import { trends } from "./someTrendsData";
import "./SomeTrendsStyle.scss";
import { FaStar } from "react-icons/fa";

const SomeTrends = () => {
  return (
    <div className="trend-container">
      <div className="row">
        <h3>HOT TREND</h3>
        {trends.slice(0, 3).map((item, id) => (
          <div key={id} className="item">
            <div>
              <img src={item.image} alt="trends" />
            </div>
            <div>
                <p>{item.title}</p>
                <span>{item.price}</span>
              <div>
              {[...Array(5)].map((_, id) => (
                  <FaStar key={id} className="item-rating-star" />
                ))}
              </div>
            </div>
          </div>
          
        ))}
      </div>
      <div className="row">
        <h3>BEST SELLER</h3>
        {trends.slice(3, 6).map((item, id) => (
          <div key={id} className="item">
            <div>
              <img src={item.image} alt="trends" />
            </div>
            <div>
                <p>{item.title}</p>
                <span>{item.price}</span>
              <div>
              {[...Array(5)].map((_, id) => (
                  <FaStar key={id} className="item-rating-star" />
                ))}
              </div>
            </div>
          </div>
          
        ))}
      </div>
      <div className="row">
        <h3>FEATURE</h3>
        {trends.slice(6, 9).map((item, id) => (
          <div key={id} className="item">
            <div>
              <img src={item.image} alt="trends" />
            </div>
            <div>
                <p>{item.title}</p>
                <span>{item.price}</span>
              <div>
              {[...Array(5)].map((_, id) => (
                  <FaStar key={id} className="item-rating-star" />
                ))}
              </div>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export { SomeTrends };
