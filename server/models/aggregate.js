const mongoose = require('mongoose');

const { Schema } = mongoose;

const pokemon_aggregateSchema = new Schema({
    aggregate : [
        {
            type: Integer,
            required: true,
            unique: false
        }
    ]
});

const pokemon_aggregate = mongoose.model('aggregate', pokemon_aggregateSchema);

module.exports = pokemon_aggregate;