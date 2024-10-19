import React from 'react';

const CardProduct = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h4>{product.name}</h4>
        <div className="reviews">
          <span className="stars">{"⭐".repeat(product.rating)}</span>
          <span> {product.reviews} reviews</span>
        </div>
        <p className="price">
          {product.discountPrice ? (
            <>
              <span className="discount">${product.discountPrice}</span>
              <span className="original">${product.originalPrice}</span>
            </>
          ) : (
            <span>${product.originalPrice}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default CardProduct;
