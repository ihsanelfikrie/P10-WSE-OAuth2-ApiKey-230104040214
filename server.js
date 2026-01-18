// 1. Load Environment Variables (Harus paling atas)
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// --- SETUP MIDDLEWARE (Wajib di atas Routes) ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- SETUP CONFIG ---
const PORT = process.env.PORT || 3000;

// DEBUGGING: Cek apakah URI terbaca
console.log("---------------------------------------------------");
console.log("Cek Variabel .env:");
console.log("URI MongoDB:", process.env.MONGODB_URI ? "DITEMUKAN" : "KOSONG/UNDEFINED");
console.log("---------------------------------------------------");

// SOLUSI DARURAT: Jika .env gagal terbaca, pakai string langsung ini:
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://mhmmdhifzi00:hifzi12345@cluster0.arkmlf9.mongodb.net/p10_db?appName=Cluster0';

// Import Routes
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

// --- FUNGSI KONEKSI DATABASE ---
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('✔ Koneksi ke MongoDB Atlas Berhasil!');
    } catch (err) {
        console.error('❌ GAGAL KONEKSI:', err.message);
        console.error('Saran: Periksa IP Whitelist di MongoDB Atlas atau koneksi internet Anda.');
        process.exit(1);
    }
};

// --- ROUTES ---
app.get('/', (req, res) => {
    res.json({
        message: 'API Server Berjalan!',
        praktikum: 'P10: Simulasi API Key & OAuth 2.0 (NIM: 230104040210)',
    });
});

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/auth', authRoutes);

// --- JALANKAN SERVER ---
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server berjalan di http://localhost:${PORT}`);
    });
});