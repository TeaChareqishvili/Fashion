import "./BlogStyles.scss";
import { blog } from "../BlogData";
import { NavLink } from "react-router-dom";

const BlogContent = ()=>{
    return(
        <div className="blog-container">
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
        {blog.slice(0, 3).map((item, id) => (
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
    )
}

export {BlogContent}