import { trends } from "./someTrendsData";
import "./SomeTrendsStyle.scss";
import { FaStar } from "react-icons/fa";


const SomeTrends = ()=>{
    return (
        <div className="trend-container">
            <div className="trends">
            <h3>HOT TREND</h3>
            <h3>BEST SELLER</h3>
            <h3>FEATURE</h3>
            </div>
          {trends.map((item,id)=>(
            <div key={id}>
             <img src={item.image} alt="trend"/>
             <div>
                <p>{item.title}</p>
                {[...Array(5)].map((_, id) => (
                  <FaStar key={id} className="item-rating-star" />
                ))}
                <span>{item.price}</span>
             </div>
            </div>
          ))}
        </div>
    )
}

export {SomeTrends}