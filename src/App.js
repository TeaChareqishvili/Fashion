import { Header } from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Women } from "./components/women/Women";
import { Blog } from "./components/blog/Blog";
import { Men } from "./components/men/Men";
import { Contacts } from "./components/contact/Contacts";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contacts/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
