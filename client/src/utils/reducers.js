import { useReducers } from 'react';


import {
    UPDATE_POKEMON_HOMEPAGE,
    ADD_DONATION,
    ADD_POKEMON_TO_HOMEPAGE,
    REMOVE_POKEMON_FROM_HOMEPAGE,
    ADD_MULTIPLE_POKEMON_TO_HOMEPAGE,
    REMOVE_MULTIPLE_POKEMONS_FROM_HOMEPAGE,
    UPDATE_POKE_COUNT,
    CLEAR_ALL,
    UPDATE_CATEGORY,
    ADD_THANK_YOU_TO_DONATE,
   
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_POKEMON_HOMEPAGE:
            return {
                ...state,
                pokemon: [...action.pokemon],
            };

        case ADD_DONATION:
            return {
                ...state,
                donationsOpen: true,
                donations: [...state.donations, action.donation],
            };
        case ADD_POKEMON_TO_HOMEPAGE:
            return {
                ...state,
                pokemonOpen: true,
                pokemon: [...state.pokemon, action.pokemon],
            };
        case ADD_MULTIPLE_POKEMON_TO_HOMEPAGE:
            return {
                ...state,
                pokemon: [...state.pokemon, ...action.pokemon],
            };
        case REMOVE_POKEMON_FROM_HOMEPAGE:
            let newState = state.pokemon.filter((pokemon) => {
                return pokemon._id !== action._id;
            }
            );

            return {
                ...state,
                pokemonOpen: newState.length > 0,
                pokemon: newState,
            };
        case REMOVE_MULTIPLE_POKEMONS_FROM_HOMEPAGE:
            let newState2 = state.pokemon.filter((pokemon) => {
                return pokemon._id !== action._id;
            }
            );

            return {
                ...state,
                pokemonOpen: newState2.length > 0,
                pokemon: newState2,
            };
        case UPDATE_POKE_COUNT:
            return {
                ...state,
                pokeCount: action.pokeCount,
            };
        case CLEAR_ALL:
            return {
                ...state,
                donationsOpen: false,
                pokemon: [],
                donations: [],
            };
        case UPDATE_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory,
            };
        case ADD_THANK_YOU_TO_DONATE:
            return {
                ...state,
                thankYouOpen: true,
                thankYou: [...state.thankYou, action.thankYou],
            };
        default:
            return state;
    }
};

export function usePokemonReducer(initialState) {   
    return useReducers(reducer, initialState)
}

