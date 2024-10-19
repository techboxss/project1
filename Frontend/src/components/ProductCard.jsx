
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-card-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-card-info">
                <p className="sku">SKU: {product.sku}</p>
                <h3>{product.name}</h3>
                <div className="rating-reviews">
                    <span className="stars">{'★'.repeat(product.rating)}</span>
                    <span>{product.reviews} reviews</span>
                </div>
                <p className="price">${product.price}</p>
                {product.originalPrice && <p className="original-price">${product.originalPrice}</p>}
            </div>
        </div>
    );
};

export default ProductCard;
