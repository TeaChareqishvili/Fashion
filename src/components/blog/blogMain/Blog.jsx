import "./BlogStyles.scss";
import {BlogContent} from "./BlogContent.jsx";
import { useState } from "react";
import { blog } from "../BlogData";
import { NavLink } from "react-router-dom";

const Blog = () => {

    const [more, setMore] = useState(false)

    const handleLoadMoreClick = () => {
        setMore(!more);     
      };

   

  return (
    <div className="blog-wrapper">
    <div className="blog-container">
        <div className="row">
        {blog.slice(0, 3).map((item, id) => (
          <div key={id} className="blog-back">
            <img src={item.image} alt="blog-img" />
            <div className="text-cover">
            <NavLink to="/blogDetails" className="navlink">   <h4>{item.text}</h4></NavLink>
              <p>
              by: <span>{item.by} </span> | {item.date}
              </p>
            </div>
          </div>
        ))}
        </div>
        <div className="row">
        {blog.slice(3, 7).map((item, id) => (
          <div key={id} className="blog-back">
            <img src={item.image} alt="blog-img" />
            <div className="text-cover">
            <NavLink to="/blogDetails"  className="navlink">   <h4>{item.text}</h4></NavLink>
              <p>
              by: <span>{item.by} </span> | {item.date}
              </p>
            </div>
          </div>
        ))}
        </div>
        <div className="row">
        {blog.slice(7, 10).map((item, id) => (
          <div key={id} className="blog-back">
            <img src={item.image} alt="blog-img" />
            <div className="text-cover">
            <NavLink to="/blogDetails"  className="navlink">   <h4>{item.text}</h4></NavLink>
              <p>
              by: <span>{item.by} </span> | {item.date}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
     {more && <BlogContent/>}
      <div className="button-load">
        <button  className="load-more" onClick={()=>handleLoadMoreClick()}>{more ? "SHOW LESS" : "LOAD MORE POSTS"}</button>
      </div>
    </div>
  );
};
export { Blog };
