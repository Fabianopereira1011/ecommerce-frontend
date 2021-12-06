import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {


  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>R$ </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <div className="product_img">        
        <img src={image} alt="" width="100%"/>
      </div>

      <button >Adicione ao cesto</button>
    </div>
  )
}

export default Product;
