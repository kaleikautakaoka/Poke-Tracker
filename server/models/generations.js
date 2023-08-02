const mongoose = require('mongoose');
const { aggregate } = require('./aggregate');

const { Schema } = mongoose;

const generationsSchema = new Schema({
   generations : [
         {
            name: {
                type: String,
                required: true,
                unique: true
            },
            pokemon_species: [
                {
                    type: String,
                    required: true,
                    unique: false
                },
                aggregate: [
                    {
                        type: Integer,
                        required: true,
                        unique: false
                    }
   ]
]}
   ]

});

const generations = mongoose.model('generations', generationsSchema);

module.exports = generations;
