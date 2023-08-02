import React, { createContext, useContext } from "react";
import { usePokemonReducer } from './reducers';

const PokeTrackerContext = createContext();

const { Provider } = PokeTrackerContext;

const PokeTrackerProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = usePokemonReducer({
        pokemon: [],
        pokemonOpen: false,
        donations: [],
        donationsOpen: false,
        pokeCount: 0,
        category: '',
        thankYou: ''
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const usePokeTrackerContext = () => {
    return useContext(PokeTrackerContext);
}

export { PokeTrackerProvider, usePokeTrackerContext };