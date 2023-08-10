import { gql } from "@apollo/client";

export const QUERY_POKEMONS = gql`
    query getPokemons($category: ID) {
        pokemons(category: $category) {
            _id
            number
            pokeName
            pokeType
            image
        }
    }
`;

export const QUERY_CATEGORY = gql`
    {
        categories {
            _id
            name
        }
    }
`;

export const QUERY_ME = gql`
    query getMe {
        me {
            _id
            username
            email
            pokemons {
                _id
                number
                pokeName
                pokeType
                image
            }
        }
    }
`;

export const QUERY_POKEMON_GEN_1 = gql`
 {
        gen1_species {
            name
            _id
        }
    }
`;

export const QUERY_POKEMON_GEN_2 = gql`
  {
        gen2_species {
            name
            _id
        }
    }
`;

export const QUERY_POKEMON_GEN_3 = gql`
   {
        gen3_species {
            name
            _id
        }
    }
`;

export const QUERY_POKEMON_GEN_4 = gql`
  {
        gen4_species {
            name
            _id
        }
    }
`;

export const QUERY_POKEMON_GEN_5 = gql`
  {
        gen5_species {
            name
            _id
        }
    }
`;

export const QUERY_POKEMON_GENERATIONS = gql`
    query generations {
        generations {
            name
        }
    }
`;

export const QUERY_USER = gql`
    {
        user {
            username
            email
            pokemons {
                _id
                number
                pokeName
                pokeType
                image
            }
        }
    }
`;

export const QUERY_POKEMON = gql`QUERY_TEST_POKEAPIDATA
    query testPokeApidata {
        testPokeApidata {
            name
            _id
        }
    }
`;
