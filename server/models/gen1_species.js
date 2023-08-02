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

const gen1_species = mongoose.model('gen1_species', gen1_speciesSchema);