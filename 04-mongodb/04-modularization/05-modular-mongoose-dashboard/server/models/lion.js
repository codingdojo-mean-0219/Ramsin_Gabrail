const mongoose = require('mongoose');
const { Schema } = mongoose;

const LionSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

module.exports = mongoose.model('Lion', LionSchema);