const { gql } = require("apollo-server-express");

//Object types for appolo server
const typeDefs = gql`

    type Category {
        _id: ID
        name: String
    }
   
    type Pokemon {
        _id: ID
        name: String
        image: String
        description: String
        quantity: Int
        category: Category
    }  

    type User {
        _id: ID
        username: String
        email: String
        pokemons: [Pokemon]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        categories: [Category]
        pokemons(category: ID, name: String): [Pokemon]
        pokemon(_id: ID!): Pokemon
        user: User

    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth

        addPokemon(name: String!, description: String!, image: String!, category: ID!): Pokemon

        updateUser(username: String, email: String, password: String): User
       
        login(email: String!, password: String!): Auth
    }
        
`;

module.exports = typeDefs;
