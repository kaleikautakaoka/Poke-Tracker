const mongoose = require("mongoose");
const { aggregate } = require("./aggregate");

const { Schema } = mongoose;

const generationsSchema = new Schema({
  generations: [
    {
      name: {
        type: String,
        required: true,
        unique: true,
      },
      pokemon_species: {
        type: Number,
        required: true,
        unique: true,
      },
    },
  ],
});

const generations = mongoose.model("generations", generationsSchema);

module.exports = generations;
