const mongoose = require('mongoose');

const { Schema } = mongoose;

const pokemonSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type:String
    },
    description: {
        type: String
    },
    donation: {
        type: Number,
        required: true,
        min: 0.99
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;