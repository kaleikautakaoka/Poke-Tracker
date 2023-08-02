const mongoose = require('mongoose');

const { Schema } = mongoose;

const gen2_speciesSchema = new Schema({
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

const gen2_species = mongoose.model('gen2_species', gen2_speciesSchema);
