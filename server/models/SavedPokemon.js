const mongoose = require('mongoose');

const { Schema } = mongoose;

const savedPokemonSchema = new Schema({
    donateDate: {
        type: Date,
        default: Date.now
    },
    pokemons: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Pokemon'
        }
    ]
});

const SavedPokemon = mongoose.model('SavedPokemon', savedPokemonSchema);

module.exports = SavedPokemon;
