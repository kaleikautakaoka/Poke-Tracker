const { gql } = require("apollo-server-express");

//Object types for appolo server
const typeDefs = gql`

    type Category {
        name: String
    }
   
    type pokemonSchema {
        name: String
        image: String
        description: String
        donation: Int
        category: Category
    }  

    type gen3_species {
         name: String
        _id: ID
    }

    type generations {
        name: String
        pokemon_species: Int
    }

    type gen1_species {
        name: String
        _id: ID
    }

    type gen2_species {
        name: String
       _id: ID
    }

    type gen4_species {
        name: String
        _id: ID
    }

    type gen5_species {
        name: String
        _id: ID
    }

    type TestPokeApidata {
        name: String
        _id: ID
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
        token: ID
        user: User
    }

    type Query {
        categories: [Category]
        pokemons(category: ID, name: String): [Pokemon]
        pokemon(_id: ID!): Pokemon
        user: User
        donation(_id: [ID]!): User
        savedPokemon(_id: ID!): SavedPokemon
        me: User
        gen3_species: [gen3_species]
        generations: [generations]
        gen1_species: [gen1_species]
        gen2_species: [gen2_species]
        gen4_species: [gen4_species]
        gen5_species: [gen5_species]
        pokemon_species: generations
        pokemon_species: [pokemon_species]
        pokemon_species: TestPokeApidata
        generations: TestPokeApidata
        pokemon_v2_pokemonspecies_aggregate: [pokemon_v2_pokemonspecies_aggregate]
        donate:(pokemon: [ID]!): Donate
        gen1_species(where: {pokemon_v2_generation: {name: {_eq: "generation-i"}}}, order_by: {id: asc}) {
            name
            id
        }
        gen2_species(where: {pokemon_v2_generation: {name: {_eq: "generation-ii"}}}, order_by: {id: asc}) {
            name
            id
        }
        gen3_species(where: {pokemon_v2_generation: {name: {_eq: "generation-iii"}}}, order_by: {id: asc}) {
            name
            id
        }
        gen4_species(where: {pokemon_v2_generation: {name: {_eq: "generation-iv"}}}, order_by: {id: asc}) {
            name
            id
        }
        gen5_species(where: {pokemon_v2_generation: {name: {_eq: "generation-v"}}}, order_by: {id: asc}) {
            name
            id
        }

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
        generations(pokemon_v2_generation: {name: {_eq: "generation-i"}}): TestPokeApidata

        addPokeTest(name: String!, id: ID!): TestPokeApidata


    }
        
`;

module.exports = typeDefs;
