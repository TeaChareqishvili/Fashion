import "./PriceRange.scss";
import { useState, useEffect, useRef } from "react";

const PriceRange = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);

  const rangeRef = useRef(null);

  const [range, setRange] = useState(true);

  useEffect(() => {
    const handleVisible = (e) => {
      if (rangeRef.current && rangeRef.current.contains(e.target)) {
        setRange((prevState) => !prevState);
      }
    };

    document.addEventListener("click", handleVisible);

    return () => {
      document.removeEventListener("click", handleVisible);
    };
  }, [rangeRef]);

  return (
    <div className="price-wrapper">
      <div className="category-title">
        <h2>Price range</h2>
      </div>
      {range && (
        <div>
          <div className="progress-range">
            <div className="range">
              <div className="progress"></div>
            </div>
            <div className="input-range">
              <input
                type="range"
                className="progress-min"
                min="0"
                max="10000"
                onChange={(e) => setMinValue(e.target.value)}
              />
              <input
                type="range"
                className="progress-max"
                min="0"
                max="10000"
                onChange={(e) => setMaxValue(e.target.value)}
              />
            </div>
          </div>
          <div className="price-range">
            <p>
              Price {minValue} - {maxValue}
            </p>
            <button className="apply-btn">FILTER</button>
          </div>
        </div>
      )}
    </div>
  );
};

export { PriceRange };
