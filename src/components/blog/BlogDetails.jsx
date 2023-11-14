import "./BlogDetailsStyle.scss";
import { fashions } from "./BlogData";
import { NavLink } from "react-router-dom";

const BlogDetails = () => {
  const randomIndex = Math.floor(Math.random() * fashions.length);
  const randomItem = fashions[randomIndex];

  return (
    <div className="fashion-data-container">
      <div className="blog-btn">
        <NavLink to="/blog">
          <button> Back To Blog</button>
        </NavLink>
      </div>
      <div className="blog-info">
        <div className="image">
          <img src={randomItem.image} alt="fashion" />
        </div>
        <div className="text">
          <h3>{randomItem.title}</h3>
          <p>{randomItem.text}</p>
        </div>
      </div>
    </div>
  );
};

export { BlogDetails };
