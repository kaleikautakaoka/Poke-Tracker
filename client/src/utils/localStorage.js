import getPokemonData from './getPokemonData';
import getUserData from './getUserData';


export const getPokemonData = () => {
    //fetch the data and return it to local storage
    const savedPokemon = localStorage.getItem('pokemon')
    ? JSON.parse(localStorage.getItem(savedPokemon)) : []; 
        return savedPokemon;
    };


export const getUserData = () => {
    //fetch the data and return it to local storage
    const savedUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem(savedUser)) : []; 
        return savedUser;
    }