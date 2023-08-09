const { gql } = require("apollo-server-express");

//Object types for appolo server
const typeDefs = gql`

    type Category {
        _id: ID
        name: String
    }
   
    type Pokemon {
        name: String
        image: String
        description: String
        donation: Int
        category: Category
    }  

    type Gen3_species {
         name: String
        _id: ID
    }

    type Generations {
        name: String
        pokemon_species: [pokemon_species]
    }

    type Gen1_species {
        name: String
        _id: ID
    }

    type Gen2_species {
        name: String
       _id: ID
    }

    type Gen4_species {
        name: String
        _id: ID
    }

    type Gen5_species {
        name: String
        _id: ID
    }

    type TestPokeApidata {
        name: String
        _id: ID
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        categories: [Category]
        savedpokemons: [SavedPokemon]
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
        gen3_species: [gen3_species]
        generations: [generations]
        gen1_species: [gen1_species]
        gen2_species: [gen2_species]
        gen4_species: [gen4_species]
        gen5_species: [gen5_species]
        generations: TestPokeApidata

    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        
        updateUser(username: String, email: String, password: String): User

        savePokemon(pokemon: [ID]!): SavedPokemon
        removePokemon(pokemon: ID!): SavedPokemon

        removeUser: User

        gen3_species: [gen3_species]
        generations: [generations]
        gen1_species: [gen1_species]

        addPokeTest(name: String!, id: ID!): TestPokeApidata


    }
        
`;

module.exports = typeDefs;
