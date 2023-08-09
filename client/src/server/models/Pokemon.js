const mongoose = require('mongoose');

const { Schema } = mongoose;

const pokemonSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: false
    },
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
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;