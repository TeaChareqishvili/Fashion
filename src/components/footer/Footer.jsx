import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { footerSlide, pay } from "./footerData";
import "./FooterStyles.scss";
import { FaInstagram } from "react-icons/fa";
import fashion from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Swiper slidesPerView="auto" className="footer-slider">
        {footerSlide.map((item, id) => (
          <SwiperSlide key={id} className="slide">
            <img src={item.image} alt="footer-img" />
            <div className="cover">
              <FaInstagram className="at" />
              <a href="/#">@ ashion_shop</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     <div className="footer-container">
        <div className="fashion">
          <img src={fashion} alt="logo"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.</p>
          <div className="pay-icons">
          {pay.map((item,id)=>(
            <div key={id} >
                <img src={item.image} alt="pay-icon"/>
            </div>
          ))}
          </div>
        </div>
        <div className="quick-links">
            <div>
            <h3>QUICK LINKS</h3>
            <ul>
                <li>About</li>
                <li>Blogs</li>
                <li>Contact</li>
                <li>FAQ</li>
            </ul>
            </div>
            <div>
            <h3>ACCOUNT</h3>
            <ul>
                <li>My Account</li>
                <li>Orders Tracking</li>
                <li>Checkout</li>
                <li>Wishlist</li>
            </ul>
            </div>
        </div>
        <div className="subscribe">
         
                <h3>NEWSLETTER</h3>
                <input className="input" type="email" placeholder="Email"/>  
          
            <button className="sub-btn">Subscribe</button>
        </div>
     </div>
    </div>
  );
};

export { Footer };
