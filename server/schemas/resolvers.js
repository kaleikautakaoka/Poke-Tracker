const { AuthenticationError } = require('apollo-server-express');
const { Category, Pokemon, User, SavedPokemon, gen1_species, gen2_species, gen3_species, gen4_species, gen5_species, generations, pokemon_species, pokemon_v2_pokemonspecies_aggregate, TestPokeApidata  } = require('../models');
const { signToken } = require('../utils/auth');
const { populate } = require('../models/Category');
// stripe payment
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

//must write resolver queries and mutations for each typeDef

const resolvers = {
    Query: {
                // // Gets all the pokemon belonging to generation 3
        // gen3_species: pokemon_v2_pokemonspecies(where: {pokemon_v2_generation: {name: {_eq: "generation-iii"}}}, order_by: {id: asc}) {
        //   name
        //   id
        // }
        // // You can run multiple queries at the same time
        // // Counts how many pokemon where release for each generation
        // generations: pokemon_v2_generation {
        //   name
        //   pokemon_species: pokemon_v2_pokemonspecies_aggregate {
        //     aggregate {
        //       count
        //     }
        //   }
        // }

        // gen3_species: async (parent, args, context) => {
        //     if (pokemon_v2_generation) {
        //         const pokemon = await Pokemon.findById(pokemon_v2_generation).populate({
        //             path: 'category.pokemon_v2_generation.name', populate: 'category'});
        //         path: 'category.pokemon_v2_generation.name',
        //         populate: 'category'
        //     };
        //         return pokemon;
        //     };
        // },

        TestPokeApidata: async () => {
            return await TestPokeApidata.find();
        },
        generations: async (parent, { TestPokeApidata, name }) => {
            const params = {};

            if (TestPokeApidata) {
                params.TestPokeApidata = TestPokeApidata;
            }  
            if (name) {
                params.name = {
                    $regex: name
                };
               
            }
            return await generations.find(params).populate('TestPokeApidata');
        },


        category: async () => {
            return await Category.find();
        },
        pokemon: async (parent, { category, name }) => {
            const params = {};

            if (category) {
                params.category = category;
            }

            if (name) {
                params.name = {
                    $regex: name
                };
            }

            return await Pokemon.find(params).populate('category');
        },
        pokemon: async (parent, { _id }) => {
            return await Pokemon.findById(_id).populate('category');
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'categories.pokemon',
                    populate: 'category'
                });

                user.categories.sort((a, b) => b.donateDate - a.donateDate);

                return user;
            }

            throw new AuthenticationError('Not logged in');
        },

        savedPokemon: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'savedpokemons.pokemons',
                    populate: 'category'
                });

                return user.savedPokemon.id(_id);
            }

            throw new AuthenticationError('User is not logged in');
        },
        donate: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const donate = new Donate({ pokemons: args.pokemons });
            const line_items = [];

            const { pokemons } = await donate.populate('pokemons');

            for (let i = 0; i < pokemons.length; i++) {
                // generate pokemon donate id for stripe
                const pokemonDonate = await stripe.pokemons.create({
                    name: pokemons[i].name,
                    description: pokemons[i].description,
                    images: [`${url}/images/${pokemons[i].image}`]
                });

                // add donate price to total
                const pokemonDonatePrice = await stripe.pokemons.createPrice({
                    pokemon: pokemonDonate.id,
                    unit_amount: pokemons[i].price * 10,
                    currency: 'usd',
                });

                // add pokemon donate price to line items array
                line_items.push({
                    price: pokemonDonatePrice.id
                });
            }

            const session = await stripe.donate.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`
            });

            return { session: session.id };
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },
        savingPokemon: async (parent, { pokemon }, context) => {
            if (context.user) {
                const savedpokemon = new Pokemon({ pokemons });

                await User.findByIdAndUpdate(context.user._id, { $push: { savedpokemons: savedpokemon } });

                return savedpokemon;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

     updateUsers: async (parent, { username, email, password }, context) => {
        if (context.user) {
            return await User.findByIdAndUpdate(context.user._id, { username, email, password }, { new: true });
        }

        throw new AuthenticationError('You need to be logged in!');
    },

    updatePokemon: async (parent, { _id, quantity }) => {
        const decrement = Math.abs(quantity) * -1;

        return await Pokemon.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    }
},

    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
            throw new AuthenticationError('No user found with this email address');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);
        return { token, user };
    },
    };



    module.exports = resolvers;
