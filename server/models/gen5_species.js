const mongoose = require('mongoose');

const { Schema } = mongoose;

const gen5_speciesSchema = new Schema({
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

const Gen5_species = mongoose.model('Gen5_species', gen5_speciesSchema);

module.exports = Gen5_species;
