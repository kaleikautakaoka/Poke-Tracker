import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;



export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POKEMON = gql`
  mutation addPokemon($name: String!, $image: String!, $description: String!, $category: String!) {
    addPokemon(name: $name, image: $image, description: $description, category: $category) {
      _id
      name
      image
      description
      category
    }
  }
`;

export const SAVE_POKEMON = gql`
  mutation savePokemon($pokemonId: ID!) {
    savePokemon(pokemonId: $pokemonId) {
      _id
      username
      email
      savedpokemons {
        _id
        name
        image
        description
        category
      }
    }
  }
`;

export const REMOVE_POKEMON = gql`
  mutation removePokemon($pokemonId: ID!) {
    removePokemon(pokemonId: $pokemonId) {
      _id
      username
      email
      savedpokemons {
        _id
        name
        image
        description
        category
      }
    }
  }
`;

export const DONATE = gql`
  mutation donate($pokemons: [ID]!) {
    donate(pokemons: $pokemons) {
      session
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation addCategory($name: String!) {
    addCategory(name: $name) {
      _id
      name
    }
  }
`;