import { gql } from "@apollo/client";

export const QUERY_POKEMON = gql`
    query getPokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            sprites {
                front_default
            }
            image
            description
            types {
                type {
                    name
                }
            }
            moves {
                move {
                    name
                }
            }
            stats {
                base_stat
                stat {
                    name
                }
            }
        }
    }

`;

export const QUERY_ALL_POKEMON = gql`
    query getAllPokemon {
        pokemon {
            id
            name
            image
            description
            types {
                type {
                    name
                }
            }
            moves {
                move {
                    name
                }
            }
            stats {
                base_stat
                stat {
                    name
                }
            }
        }
    }
`;

const QUERY_TALLEST_POKEMON = gql`
query tallest {
    pokemon: pokemon_v2_pokemon(order_by: {height: desc}, limit: 3, where: {is_default: {_eq: true}}) {
      name
      height
    }
  }
`;

