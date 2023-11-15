import "./SummerDiscountStyle.scss";
import discount from "../../../assets/discount.webp";
import { useState, useEffect } from "react";
import { sale } from "../homeData";
import { NavLink } from "react-router-dom";

const SummerDiscount = () => {
  const [day, setDay] = useState(28);
  const [hour, setHour] = useState(14);
  const [minute, setMinute] = useState(50);
  const [second, setSecond] = useState(59);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setSecond((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  useEffect(() => {
    if (second < 0) {
      if (minute > 0) {
        setMinute((prevMinutes) => prevMinutes - 1);
        setSecond(59);
      } else if (hour > 0) {
        setHour((prevHours) => prevHours - 1);
        setMinute(59);
        setSecond(59);
      } else if (day > 0) {
        setDay((prevDays) => prevDays - 1);
        setHour(23);
        setMinute(59);
        setSecond(59);
      }
    }
  }, [second, minute, hour, day]);

  return (
    <div className="main-discount-wrapper">
      <div className="discount-wrapper">
        <div className="image">
          <img src={discount} alt="discount-img" />
        </div>
        <div className="background">
          <div className="for-circle">
            <div className="circle"></div>
            <div className="text-over-circle">
              <span className="span">DISCOUNT</span>
              <h3>Summer 2023</h3>
              <p>
                SALE <span>50%</span>
              </p>
            </div>
          </div>
          <div className="date">
            <span>{day}</span>
            <p>Day</p>
            <span>{hour}</span>
            <p>Hour</p>
            <span>{minute}</span>
            <p>Min</p>
            <span>{second}</span>
            <p>Sec</p>
          </div>
          <div className="shop-now">
            <NavLink to="/shop">
              {" "}
              <p>SHOP NOW</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="about-items-wrapper">
        {sale.map((item, id) => (
          <div key={id} className="about-items">
            <div>
              <p className="fa-icon">{item.fa}</p>
            </div>
            <div className="text">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { SummerDiscount };
