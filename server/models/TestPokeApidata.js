const mongoose = require('mongoose');

const { Schema } = mongoose;

const testPokeApidataSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    id: {
        type: Number,
        required: true,
        unique: false
    },
});

const testPokeApidata = mongoose.model('testPokeApidata', testPokeApidataSchema);

module.exports = testPokeApidata;