import "./NewProductStyle.scss";


const Products = ({handleCategoryChange}) => {


  return (
    <div className="product-list-nav">
      <div>
        <h4>
          <u>NEW</u> PRODUCT
        </h4>
      </div>
      <ul className="nav-list">
        <li onClick={() => handleCategoryChange("all")}>All</li>
        <li onClick={() => handleCategoryChange("woman")}>Women's</li>
        <li onClick={() => handleCategoryChange("men")}>Men's</li>
        <li onClick={() => handleCategoryChange("kid")}>Kid's</li>
        <li onClick={() => handleCategoryChange("accessorie")}>Accessories</li>
        <li onClick={() => handleCategoryChange("cosmetics")}>Cosmetics</li>
      </ul>
    </div>
  );
};

export { Products };
