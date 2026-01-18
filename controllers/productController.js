const Product = require('../models/Product');

const getPublicProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ message: 'Public Products', data: products });
    } catch (err) { res.status(500).json({ message: err.message }); }
};

const createProduct = async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Akses Ditolak: Hanya Admin' });
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ message: 'Created', data: product });
    } catch (err) { res.status(400).json({ message: err.message }); }
};

const updateProduct = async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Akses Ditolak' });
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: 'Updated', data: updated });
    } catch (err) { res.status(400).json({ message: err.message }); }
};

const deleteProduct = async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Akses Ditolak' });
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    } catch (err) { res.status(500).json({ message: err.message }); }
};

module.exports = { getPublicProducts, createProduct, updateProduct, deleteProduct };