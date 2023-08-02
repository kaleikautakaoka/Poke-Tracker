const { AuthenticationError } = require('apollo-server-express');
const { user, category, pokeCard, pokeMisc, pokePlush } = require('../models');
const { signToken } = require('../utils/auth');

//must write resolver queries and mutations for each typeDef

const resolvers = {
    Query: {
        categories: async () => {
            return await category.find();
        },
        pokemons: async (parent, { category, name }) => {
            const params = {};

            if (category) {
                params.category = category;
            }

            if (name) {
                params.name = {
                    $regex: name
                };
            }

            return await pokeCard.find(params).populate('category');
        }
            
