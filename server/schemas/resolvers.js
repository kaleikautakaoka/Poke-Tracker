const { AuthenticationError } = require('apollo-server-express');
const { user, category, pokeCard, pokeMisc, pokePlush } = require('../models');
const { signToken } = require('../utils/auth');

//must write resolver queries and mutations for each typeDef

const resolvers = {
    Query: {
        user: async () => {
            return user.find().populate('categories');
        },
        category: async (parent, { name }) => {
            
