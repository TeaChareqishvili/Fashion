import { Header } from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Blog } from "./components/blog/blogMain/Blog";
import { Contacts } from "./components/contact/Contacts";
import { Footer } from "./components/footer/Footer";
import { BlogDetails } from "./components/blog/BlogDetails";
import { Shop } from "./components/shopp/Shop";
import { ShopCart } from "./components/shopCart/ShopCart";
import { FavoriteItems } from "./components/favorite/FavoriteItems";
import { useAddFavorites } from "./components/hook/saveItems";
import { useState } from "react";

function App() {
  const {
    addItem,
    chosenItem,
    handleRemoveItem,
    chooseFavorite,
    addFavorite,
    handleRemoveItemFavorite,
  } = useAddFavorites();

  const [clickedItem, setClickedItem] = useState(null);
  const [popUpItem, setPopUpItem] = useState(false);

  const handleIconClick = (clickedItem) => {
    setClickedItem(clickedItem);
    setPopUpItem(true);
   
  };

  return (
    <div className="App">
      <Header chosenItem={chosenItem} addFavorite={addFavorite} />
      <Routes>
        <Route
          path="/Fashion"
          element={
            <Home
              addItem={addItem}
              chooseFavorite={chooseFavorite}
              handleIconClick={handleIconClick}
              setClickedItem={setClickedItem}
              popUpItem={popUpItem}
              setPopUpItem={setPopUpItem}
              clickedItem={clickedItem}
            />
          }
        />
        <Route path="/cart" element={<ShopCart chosenItem={chosenItem} handleRemoveItem={handleRemoveItem} />} />
        <Route path="/favorite" element={<FavoriteItems addFavorite={addFavorite} handleRemoveItemFavorite={handleRemoveItemFavorite} addItem={addItem} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop popUpItem={popUpItem} handleIconClick={handleIconClick} setPopUpItem={setPopUpItem} clickedItem={clickedItem} addItem={addItem} chooseFavorite={chooseFavorite} />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/blogDetails" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
