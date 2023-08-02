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

const gen5_species = mongoose.model('gen5_species', gen5_speciesSchema);
