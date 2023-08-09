import { useReducers } from 'react';
import { UPDATE_POKEMON, UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        // if action type value is the value of `UPDATE_POKEMON`, return a new state object with an updated pokemon array
        case UPDATE_POKEMON:
            return {
                ...state,
                pokemons: [...action.pokemons],
            };

        // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };

        // if action type value is the value of `UPDATE_CURRENT_CATEGORY`, return a new state object with an updated currentCategory value
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };

        // if it's none of these actions, do not update state at all and keep things the same!
        default:
            return state;
    }
}

export function usePokemonReducer(initialState) {
    return useReducers(reducer, initialState)

}