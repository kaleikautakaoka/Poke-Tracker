import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import Donate from './pages/Donate';


import ThankYou from './pages/ThankYou';
import NAV from './components/Nav';

require ('dotenv').config();
const { GITHUB_TOKEN } = process.env;

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = GITHUB_TOKEN;
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
        <NAV>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/donate' element={<Donate />} />
            <Route path='/savedPoke' element={<savedPoke />} />
            <Route path='/searchPoke' element={<searchPoke />} />
            <Route path='/thankyou' element={<ThankYou />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </NAV>

        </>
      </Router>
    </ApolloProvider>
  );

          
}

export default App;
