const { gql } = require('apollo-server-express');


//Object types for appolo server
const typeDefs = gql`
    type user {
        _id: ID
        username: String
        email: String
        password: String
        categories: [Category]
    }

    type category {
        _id: ID
        name: String
        pokemons: [Pokemon]
    }

    type pokeCard {
        _id: ID
        name: String
        image: String
        description: String
        category: Category
    }

    type pokeMisc {
        _id: ID
        name: String
        image: String
        description: String
        category: Category
    }

    type PokePlush {
        _id: ID
        name: String
        image: String
        description: String
        category: Category
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        categories: [Category]
        category(name: String!): Category
        pokemons(category: String): [Pokemon]
        pokemon(_id: ID!): Pokemon
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        addCategory(name: String!): Category
        addPokemon(name: String!, image: String!, description: String!, category: String!): Pokemon
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;