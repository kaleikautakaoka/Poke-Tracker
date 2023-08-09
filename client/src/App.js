import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

//import pages and list them here
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound'; 
import PokemonList from './pages/PokemonList';
import Pokemonentry from './pages/Pokemonentry';
import SearchPoke from './pages/SearchPoke';
import Profile from './pages/Profile';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
        
          
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/pokemonlist' element={<PokemonList />} /> 
            <Route path='/Pokemonentry' element={<Pokemonentry />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/searchPoke' element={<Pokemonentry />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/*' element={<NotFound />} />

          
       

        </>
      </Router>
    </ApolloProvider>
  );

          
}

export default App;
