const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    owner: { type: String, required: true },
    status: { type: String, enum: ['active', 'revoked'], default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('ApiKey', apiKeySchema);