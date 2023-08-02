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

    type SavedPokemon {
        _id: ID
        donateDate: String
        pokemon: [Pokemon]
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        categories: [Category]
        savedpokemons: [SavedPokemon]
    }

    type Donate {
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
        user: [User]!
        user(userId: ID!): User
        savedPokemon(--_id: ID!): SavedPokemon
        donate(session [ID]): Donate
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        
        updateUser(username: String, email: String, password: String): User

        savePokemon(pokemon: [ID]!): SavedPokemon
        removePokemon(pokemon: ID!): SavedPokemon

        removeUser: User

    }
        
`;

module.exports = typeDefs;
