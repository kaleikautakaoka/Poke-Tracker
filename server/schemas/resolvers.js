const { AuthenticationError } = require('apollo-server-express');
const { user, category, pokeCard, pokeMisc, pokePlush } = require('../models');
const { signToken } = require('../utils/auth');

//must write resolver queries and mutations for each typeDef
