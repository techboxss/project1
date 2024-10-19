const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const insertProducts = require('./Modules/AddProduct');
const insertUsers = require("./Modules/AddUsers"); 
const Product = require('./Modules/Product');
const userRoutes = require('./Routers/UserRouter');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.DATABASE)
    .then(() => {
        console.log('MongoDB connected');
        insertProducts(); 
        insertUsers(); 
    })
    .catch(err => console.error('MongoDB connection error:', err));


app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/products', async (req, res) => {
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.use('/users', userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
