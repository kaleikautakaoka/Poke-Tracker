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
        category(categoryId: ID, name: String!): Category
        users: [User]
        
`;

module.exports = typeDefs;
