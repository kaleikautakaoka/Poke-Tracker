const mongoose = require('mongoose');

const { Schema } = mongoose;

const gen4_speciesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: Number,
        required: true,
        unique: true
    }
});

const gen4_species = mongoose.model('gen4_species', gen4_speciesSchema);

module.exports = gen4_species;