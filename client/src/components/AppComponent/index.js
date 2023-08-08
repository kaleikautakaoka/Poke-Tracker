import React from 'react';
import './App.css';

import PokeLibraryList from '../PokemonList.js';
import PokemonSaved from '../PokemonSaved/PokemonSaved.js';
import getPokemonData from '../../utils/API.js';

const AppComponent = () => {
    <div className="AppComponent">
       <PokeLibraryList/>
         <PokemonSaved/>
         <button onClick={getPokemonData}>Get Pokemon Data</button>
    </div>
}

export default AppComponent;