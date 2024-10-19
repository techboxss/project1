import React from 'react';
import CardProduct from './CardProduct';

const ListProduct = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <CardProduct key={index} product={product} />
      ))}
    </div>
  );
};

export default ListProduct;
