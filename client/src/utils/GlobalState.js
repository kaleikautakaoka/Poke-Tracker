import React, { createContext, useState } from "react";


const PokeLibraryGlobalContext = createContext();

export const PokeLibraryProvider = (props) => {
    const [pokemons, setPokemons] = useState([
        { id: 1, name: 'Bulbasaur' },
        { id: 2, name: 'Charmander' },
        { id: 3, name: 'Squirtle' }
    ]
    );
 const [pokemonSaved, setPokemonSaved] = useState([]);

 const providerValue = {
        pokemons,
        pokemonSaved,
        setPokemons,
        setPokemonSaved
    };

    return (
        <PokeLibraryGlobalContext.Provider value={providerValue}>
            {props.children}
        </PokeLibraryGlobalContext.Provider>
    );
};

