import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialProduct = ({data}) => {
  
  return (
    <>
      <div className="special-width col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div className="flash-container">
              <img src={data.src} className="flash-sale img-fluid" alt="watch" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">{data.brand}</h5>
              <h6 className="title">
                {data.title}
              </h6>
              <ReactStars
                count={data.ReactStars.count}
                size={data.ReactStars.size}
                value={data.ReactStars.value}
                edit={data.ReactStars.edit}
                activeColor={data.ReactStars.activeColor}
              />
              <p className="price">
                <span className="red-p">GHC{data.price.sellingPrice}</span> &nbsp; <strike>GHC{data.price.originalPrice}</strike>
              </p>
              
              
              <Link to={'/'} className="home-buy">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;