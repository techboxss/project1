import React from 'react';
import './Support.css'; 


const Support = () => {
  const features = [
    {
      icon: '/free-delivery.svg', 
      title: 'Free Shipping',
      description: 'For orders from $50',
    },
    {
      icon: '/24-hours.svg', 
      title: 'Support 24/7',
      description: 'Call us anytime',
    },
    {
      icon: '/payment-security.svg', 
      title: '100% Safety',
      description: 'Only secure payments',
    },
    {
      icon: '/tag.svg',
      title: 'Hot Offers',
      description: 'Discounts up to 90%',
    },
  ];

  return (
    <div className="support-section">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <img src={feature.icon} alt={feature.title} className="feature-icon" />
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Support;
