const mongoose = require('mongoose');

const { Schema } = mongoose;

const pokemon_speciesSchema = new Schema({
pokemon_species : {
    type: String,
    required: true,
    unique: false
},
});

const pokemon_species = mongoose.model('pokemon_species', pokemon_speciesSchema);
