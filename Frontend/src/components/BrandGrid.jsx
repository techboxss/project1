
import React from 'react';
import CardComponent from './CardComponent';



const brands = [
  { logo: '/images/brand-1.png', name: 'AIMPARTS' },
  { logo: '/images/brand-2.png', name: 'WINDENGINE' },      
  { logo: '/images/brand-3.png', name: 'TURBOELECTRIC' }, 
  { logo: '/images/brand-4.png', name: 'STARTONE' },           
  { logo: '/images/brand-5.png', name: 'STARTONE' },   
  { logo: '/images/brand-6.png', name: 'STARTONE' }, 
  { logo: '/images/brand-7.png', name: 'STARTONE' },   
  { logo: '/images/brand-8.png', name: 'STARTONE' },  
  { logo: '/images/brand-9.png', name: 'STARTONE' },  
  { logo: '/images/brand-10.png', name: 'STARTONE' }, 
  { logo: '/images/brand-11.png', name: 'STARTONE' },  
  { logo: '/images/brand-12.png', name: 'STARTONE' }, 
  { logo: '/images/brand-13.png', name: 'STARTONE' },
  { logo: '/images/brand-14.png', name: 'STARTONE' },
  { logo: '/images/brand-15.png', name: 'STARTONE' }, 
  { logo: '/images/brand-16.png', name: 'STARTONE' },         

           
];

const BrandGrid = () => {
  return (
    <div className="brand-grid">
      {brands.map((brand, index) => (
        <CardComponent key={index} logo={brand.logo} name={brand.name} />
      ))}
    </div>
  );
};

export default BrandGrid;
