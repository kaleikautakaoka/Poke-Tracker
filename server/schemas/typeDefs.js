const { gql } = require("apollo-server-express");

//Object types for appolo server
const typeDefs = gql`

    type category {
        _id: ID
        name: String
        pokemons: [Pokemon]
   }

    type pokemon {
        _id: ID
        name: String
        image: String
        description: String
        category: Category
    }

    savedPokemon {
        _id: ID
        name: String
        image: String
        description: String
        category: Category
    }

    type user {
        _id: ID
        username: String
        email: String
        password: String
        categories: [Category]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        categories: [Category]
        pokemons(category: ID, name: String): [Pokemon]
        pokemon(_id: ID!): Pokemon
        user: User
        savedPokemon(--_id: ID!): savedPokemon
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        savePokemon(pokemon: [ID]!): savedPokemon
        removePokemon(pokemon: ID!): savedPokemon
        updateUser(username: String, email: String, password: String): User
        login(email: String!, password: String!): Auth
    }
        
`;

module.exports = typeDefs;
