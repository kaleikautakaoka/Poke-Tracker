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

const Gen4_species = mongoose.model('Gen4_species', gen4_speciesSchema);

module.exports = Gen4_species;