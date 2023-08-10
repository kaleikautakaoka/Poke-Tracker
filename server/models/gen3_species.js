const mongoose = require('mongoose');

const { Schema } = mongoose;

const gen3_speciesSchema = new Schema({
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

const Gen3_species = mongoose.model('Gen3_species', gen3_speciesSchema);

module.exports = Gen3_species;