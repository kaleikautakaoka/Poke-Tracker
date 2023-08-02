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

const gen3_species = mongoose.model('gen3_species', gen3_speciesSchema);