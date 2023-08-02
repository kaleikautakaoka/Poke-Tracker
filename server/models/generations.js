const mongoose = require('mongoose');

const { Schema } = mongoose;

const generationsSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: Number,
        required: false,
        unique: false
    }
});

const generations = mongoose.model('generations', generationsSchema);
