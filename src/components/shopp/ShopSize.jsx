import "./ShopStyle.scss";
import { info } from "./shopData";

const ShopSize = ()=>{
    return (
        <div className="size-color-wrapper">
            <div>
                <div>
                    <h2>SHOP BY SIZE</h2>
                </div>
                {info.map((item,id)=>(
                    <div key={id} className="size-color">
                     <label>
                        <input type="checkbox"/>
                     </label>
                     <p>{item.size}</p>
                    </div>
                ))}
                <div>
                    <h2>SHOP BY COLOR</h2>
                </div>
                {info.map((item,id)=>(
                    <div key={id} className="size-color">
                     <label>
                        <input type="checkbox"/>
                     </label>
                     <p>{item.color}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export {ShopSize}