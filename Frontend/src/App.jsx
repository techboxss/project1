

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/Pages/About';
import Contacts from './components/Pages/Contacts';
import StoreLocation from './components/Pages/StoreLocation';
import TrackOrder from './components/Pages/TrackOrder';
import Blog from './components/Pages/Blog';
import HeroSection from './components/HeroSection';
import CardComponent from './components/CardComponent';
import BrandGrid from './components/BrandGrid';
import ProductGrid from './components/ProductGrid';
import Pages from './components/Pages';
import Support from './components/Support';
import Footer from './components/Footer';
import CategorySection from './components/CategorySection'; // New component

const App = () => {
  // Product data
  const topRatedProducts = [
    {
      name: 'Fantastic 12-Stroke Engine With A Power of 1991 hp',
      image: '/images/product-1.jpeg',
      rating: 3,
      reviews: 17,
      originalPrice: 2579.0,
    },
    {
      name: 'Set of Four 19 Inch Spiked Tires',
      image: '/images/product-2.jpeg',
      rating: 4,
      reviews: 9,
      originalPrice: 327.0,
    },
    {
      name: '40 Megawatt Low Beam Lamp',
      image: '/images/product-3.jpeg',
      rating: 4,
      reviews: 31,
      originalPrice: 8.0,
      discountPrice: 4.0,
    },
  ];

  const specialOffers = [
    {
      name: 'Brandix Manual Five Speed Gearbox',
      image: '/images/product-4.jpeg',
      rating: 4,
      reviews: 6,
      originalPrice: 879.0,
    },
    {
      name: 'Set of Car Floor Mats Brandix Z4',
      image: '/images/product-5.jpeg',
      rating: 4,
      reviews: 16,
      originalPrice: 94.0,
      discountPrice: 78.0,
    },
    {
      name: 'Taillights Brandix Z54',
      image: '/images/product-6.jpeg',
      rating: 2,
      reviews: 8,
      originalPrice: 60.0,
    },
  ];

  const bestsellers = [
    {
      name: 'Brandix Engine Block Z4',
      image: '/images/product-7.jpeg',
      rating: 0,
      reviews: 0,
      originalPrice: 573.0,
      discountPrice: 452.0,
    },
    {
      name: 'Brandix Clutch Discs Z175',
      image:'/images/product-8.jpeg',
      rating: 3,
      reviews: 7,
      originalPrice: 345.0,
    },
    {
      name: 'Brandix Manual Five Speed Gearbox',
      image: '/images/product-9.jpeg',
      rating: 4,
      reviews: 6,
      originalPrice: 879.0,
    },
  ];

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        {/* Home page */}
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <CardComponent />
              <BrandGrid />
              <ProductGrid />
             
              <Pages />
              <CategorySection title="Top Rated Products" products={topRatedProducts} />
              <CategorySection title="Special Offers" products={specialOffers} />
              <CategorySection title="Bestsellers" products={bestsellers} />
              <Support />
            </>
          } 
        />
        {/* Other routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/store-location" element={<StoreLocation />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

