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
  query categories {
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
  query gen1_species {
    gen1_species {
      name
      _id
    }
  }
`;

export const QUERY_POKEMON_GEN_2 = gql`
  query gen2_species {
    gen2_species {
      name
      _id
    }
  }
`;

export const QUERY_POKEMON_GEN_3 = gql`
  query gen3_species {
    gen3_species {
      name
      _id
    }
  }
`;

export const QUERY_POKEMON_GEN_4 = gql`
  query gen4_species {
    gen4_species {
      name
      _id
    }
  }
`;

export const QUERY_POKEMON_GEN_5 = gql`
  query gen5_species {
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
  query user {
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
