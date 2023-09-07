import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { footerSlide } from "./footerData";
import "./FooterStyles.scss";
import { FaInstagram} from 'react-icons/fa';


const Footer =()=>{
    return(
        <div className="footer-wrapper">
            <Swiper   slidesPerView="auto" className="footer-slider">
                {footerSlide.map((item,id)=>(
                    <SwiperSlide key={id} className="slide">
                   <img src={item.image} alt="footer-img"/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <FaInstagram/>
            </div>
        </div>
    )
}

export {Footer}