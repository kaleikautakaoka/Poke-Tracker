import { gql } from "@apollo/client";

export const QUERY_POKEMON_GEN_1 = gql`
    query gen1_species {
        gen1_species {
            name
            id
        }
    }
`;

export const QUERY_POKEMON_GEN_2 = gql`
    query gen2_species {
        gen2_species {
            name
            id
        }
    }
`;

export const QUERY_POKEMON_GEN_3 = gql`
    query gen3_species {
        gen3_species {
            name
            id
        }
    }
`;

export const QUERY_POKEMON_GEN_4 = gql`
    query gen4_species {
        gen4_species {
            name
            id
        }
    }
`;

export const QUERY_POKEMON_GEN_5 = gql`
    query gen5_species {
        gen5_species {
            name
            id
        }
    }
`;

export const QUERY_POKEMON_GENERATIONS = gql`
    query generations {
        generations {
            name
            pokemon_species {
                aggregate {
                    count
                }
            }
        }
    }
`;

export const QUERY_POKEMON_SPECIES = gql`
    query pokemon_species {
        pokemon_species {
            pokemon_v2_pokemonspecies_aggregate {
                aggregate {
                    count
                }
            }
        }
    }
`;

export const QUERY_POKEMON_AGGREGATE = gql`
    query pokemon_v2_pokemonspecies_aggregate {
        pokemon_v2_pokemonspecies_aggregate {
            aggregate {
                count
            }
        }
    }
`;

export const QUERY_POKEMON_V2_POKEMONSPECIES_AGGREGATE = gql`
    query pokemon_v2_pokemonspecies_aggregate {
        pokemon_v2_pokemonspecies_aggregate {
            aggregate {
                count
            }
        }
    }
`;







