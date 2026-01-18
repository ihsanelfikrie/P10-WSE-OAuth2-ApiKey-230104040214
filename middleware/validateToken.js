const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            res.status(403).json({ message: 'Token tidak valid' });
        }
    } else {
        res.status(403).json({ message: 'Token tidak ditemukan' });
    }
};

module.exports = validateToken;