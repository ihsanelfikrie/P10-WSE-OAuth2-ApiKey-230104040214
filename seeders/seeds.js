require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const ApiKey = require('../models/ApiKey');
const Product = require('../models/Product');

const MONGODB_URI = process.env.MONGODB_URI;

const seedDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Koneksi OK, mulai seeding...');
        
        await User.deleteMany(); await ApiKey.deleteMany(); await Product.deleteMany();

        await User.create([
            { username: 'admin', password: 'password123', role: 'admin' },
            { username: 'userbiasa', password: 'userpass', role: 'user' }
        ]);

        await ApiKey.create([
            { key: 'PRACTICUM_API_KEY_A_1234567890', owner: 'App A', status: 'active' }
        ]);

        await Product.create([
            { name: 'Laptop', price: 10000000 },
            { name: 'Mouse', price: 50000 }
        ]);

        console.log('Seeding Selesai!');
        process.exit();
    } catch (error) {
        console.error('Seeding Gagal:', error);
        process.exit(1);
    }
};

seedDB();