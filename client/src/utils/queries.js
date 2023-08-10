import { gql } from "@apollo/client";

export const QUERY_POKEMONS = gql`
  query getPokemons($category: ID) {
    pokemons(category: $category) {
      _id
      name
      image
      description
      quantity
      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_POKEMONS = gql`
  {
    pokemons {
      name
      image
      description
      quantity
      category {
        name
      }
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

export const QUERY_USER = gql`
  {
    user {
      username
      email
      pokemons {
        _id
        name
        image
        description
        quantity
      }
    }
  }
`;

export const QUERY_ME = gql`
  query getMe {
    me {
      username
        email
        pokemons {
            _id
            name
            image
            description
            quantity
      }
    }
  }
`;
