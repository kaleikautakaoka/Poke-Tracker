const mongoose = require('mongoose');

const { Schema } = mongoose;

const pokemon_speciesSchema = new Schema({
pokemon_species : [
    {
        aggregate: {
            type: Interger,
            required: true,
            unique: false
        },
    }
]
});

const pokemon_species = mongoose.model('pokemon_species', pokemon_speciesSchema);

module.exports = pokemon_species;
