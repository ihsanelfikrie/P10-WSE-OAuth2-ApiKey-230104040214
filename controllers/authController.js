const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const authUser = async (req, res) => {
    // Error req.body undefined biasanya hilang setelah perbaikan server.js
    const { username, password } = req.body; 

    try {
        const user = await User.findOne({ username });
        if (user && (await user.matchPassword(password))) {
            res.json({
                token_type: 'Bearer',
                access_token: generateToken(user._id, user.role),
                user: { id: user._id, role: user.role }
            });
        } else {
            res.status(401).json({ message: 'Username atau Password salah' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { authUser };