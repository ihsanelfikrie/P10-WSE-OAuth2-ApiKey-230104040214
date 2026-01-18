const ApiKey = require('../models/ApiKey');

const validateApiKey = async (req, res, next) => {
    const apiKey = req.header('x-api-key');
    if (!apiKey) return res.status(401).json({ message: 'API Key tidak ditemukan' });

    try {
        const keyData = await ApiKey.findOne({ key: apiKey, status: 'active' });
        if (!keyData) return res.status(401).json({ message: 'API Key tidak valid' });
        req.apiKey = keyData;
        next();
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = validateApiKey;