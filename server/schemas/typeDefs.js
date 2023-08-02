const { gql } = require("apollo-server-express");

//Object types for appolo server
const typeDefs = gql`

    type Category {
        _id: ID
        name: String
        pokemon: [Pokemon]
   }

    type Pokemon {
        _id: ID
        name: String
        image: String
        description: String
        category: Category
    }

    SavedPokemon {
        _id: ID
        name: String
        image: String
        description: String
        category: Category
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        categories: [Category]
        savedpokemons: [SavedPokemon]
    }

    Donate {
        session: ID
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        categories: [Category]
        pokemons(category: ID, name: String): [Pokemon]
        Pokemon(_id: ID!): Pokemon
        user: User
        savedPokemon(--_id: ID!): SavedPokemon
        donate(session [ID]): Donate
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        savePokemon(pokemon: [ID]!): SavedPokemon
        removePokemon(pokemon: ID!): SavedPokemon
        updateUser(username: String, email: String, password: String): User
        login(email: String!, password: String!): Auth
    }
        
`;

module.exports = typeDefs;
