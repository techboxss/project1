import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const products = [
    {
        sku: 'A43-44328-B',
        name: "Glossy Gray 19' Aluminium Wheel AR-19",
        image: '/images/product-1.jpeg', 
        rating: 5,
        reviews: 26,
        price: 589,
    },
    {
        sku: '729-51203-B',
        name: 'Twin Exhaust Pipe From Brandix Z54',
        image: '/images/product-2.jpeg', 
        rating: 4,
        reviews: 9,
        price: 749,
    },
    {
        sku: '573-49386-C',
        name: 'Motor Oil Level 5',
        image: '/images/product-3.jpeg', 
        rating: 4,
        reviews: 2,
        price: 23,
    },
    {
        sku: '753-38573-B',
        name: 'Brandix Engine Block Z4',
        image: '/images/product-4.jpeg', 
        rating: 0,
        reviews: 0,
        price: 452,
        originalPrice: 573,
    },
    {
        sku: '472-67382-Z',
        name: 'Brandix Clutch Discs Z175',
        image: '/images/product-5.jpeg', 
        rating: 3,
        reviews: 7,
        price: 345,
    },
    {
        sku: '472-67382-Z',
        name: 'Brandix Clutch Discs Z175',
        image: '/images/product-6.jpeg', 
        rating: 3,
        reviews: 8,
        price: 345,
    },
    {
        sku: '472-67382-Z',
        name: '',
        image: '/images/product-7.jpeg', 
        rating: 3,
        reviews: 8,
        price: 345,
    },
    {
        sku: '472-67382-Z',
        name: 'Brandix Clutch Discs Z175',
        image: '/images/product-8.jpeg', 
        rating: 3,
        reviews: 8,
        price: 345,
    },
    {
        sku: '472-67382-Z',
        name: 'Brandix Clutch Discs Z175',
        image: '/images/product-9.jpeg', 
        rating: 3,
        reviews: 8,
        price: 345,
    },
    {
        sku: '472-67382-Z',
        name: 'Brandix Clutch Discs Z175',
        image: '/images/product-10.jpeg', 
        rating: 3,
        reviews: 8,
        price: 345,
    },
    {
        sku: '472-67382-Z',
        name: 'Brandix Clutch Discs Z175',
        image: '/images/product-11.jpeg', 
        rating: 3,
        reviews: 8,
        price: 345,
    },
    {
        sku: '472-67382-Z',
        name: 'Brandix Clutch Discs Z175',
        image: '/images/product-12.jpeg', 
        rating: 3,
        reviews: 8,
        price: 345,
    },
    {
        sku: '472-67382-Z',
        name: 'Brandix Clutch Discs Z175',
        image: '/images/product-13.jpeg', 
        rating: 3,
        reviews: 8,
        price: 345,
    }
];

const ProductGrid = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 5; 
    
    
    const startIndex = currentPage * productsPerPage;
    const displayedProducts = products.slice(startIndex, startIndex + productsPerPage);
    
    const handleNextPage = () => {
        if (startIndex + productsPerPage < products.length) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="product-grid-container">
            <div className="product-grid-header">
                <h1 className="header-title">Featured Products</h1>
                <div className="header-filters">
                    <span className="filter-option">All</span>
                    <span className="filter-option">Power Tools</span>
                    <span className="filter-option">Hand Tools</span>
                    <span className="filter-option">Plumbing</span>
                
                    <span className={`arrow ${currentPage === 0 ? 'disabled' : ''}`} onClick={handlePreviousPage}>&lt;</span>
                    <span className={`arrow ${startIndex + productsPerPage >= products.length ? 'disabled' : ''}`} onClick={handleNextPage}>&gt;</span>
                </div>
            </div>
            <div className="product-grid">
                {displayedProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
