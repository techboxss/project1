import React from 'react';
import ListProduct from './ListProduct';

const CategorySection = ({ title, products }) => {
  return (
    <div className="category-section">
      <h3>{title}</h3>
      <ListProduct products={products} />
    </div>
  );
};

export default CategorySection;
