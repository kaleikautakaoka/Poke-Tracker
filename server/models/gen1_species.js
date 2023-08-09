const mongoose = require('mongoose');

const { Schema } = mongoose;

const gen1_speciesSchema = new Schema({
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

const Gen1_species = mongoose.model('Gen1_species', gen1_speciesSchema);

module.exports = Gen1_species;