import "./FavoriteStyle.scss";
import { useAddFavorites } from "../hook/saveItems";

const FavoriteItems =()=>{

    const {addFavorite} = useAddFavorites()

console.log("favorute", addFavorite)
   

    return(
        <div className="favorite-main-wrapper">
         <div className="favorite-items">
            <div>
            <p>Favorite Items</p>
            <p>Total <span>{addFavorite.length}</span></p>
            </div>
            <div className="border"></div>
         </div>
        </div>
    )
}

export {FavoriteItems}