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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ShopCart />} />
        <Route path="/favorite" element={<FavoriteItems />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contacts/>} />
        <Route path="/blogDetails" element={<BlogDetails/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
