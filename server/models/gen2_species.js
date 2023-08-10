const mongoose = require('mongoose');

const { Schema } = mongoose;

const gen2_speciesSchema = new Schema({
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

const Gen2_species = mongoose.model('Gen2_species', gen2_speciesSchema);

module.exports = Gen2_species;
