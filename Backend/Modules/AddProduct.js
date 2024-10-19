const Product = require("./Product"); 

const products = [
    {
        sku: 'EO-12345',
        name: "Premium Engine Oil 5W-30",
        image: '/images/product-engine-oil.jpeg',
        rating: 5,
        reviews: 32,
        price: 45,
    },
    {
        sku: 'TF-54321',
        name: "Transmission Fluid Type F",
        image: '/images/product-transmission-fluid.jpeg',
        rating: 4,
        reviews: 20,
        price: 60,
    },
    {
        sku: 'EB-98234',
        name: "Engine Block Z6",
        image: '/images/product-engine-block.jpeg',
        rating: 5,
        reviews: 15,
        price: 1200,
        originalPrice: 1400,
    },
    {
        sku: 'BW-72834',
        name: "Brake Fluid DOT-4",
        image: '/images/product-brake-fluid.jpeg',
        rating: 4,
        reviews: 18,
        price: 25,
    },
];

const insertProducts = async () => {
    try {
       
        const existingProducts = await Product.find();
        if (existingProducts.length === 0) {
            await Product.insertMany(products);
            console.log('Products inserted successfully.');
        } else {
            console.log('Products already exist, skipping insertion.');
        }
    } catch (error) {
        console.error('Error inserting products:', error);
    }
};

module.exports = insertProducts;
