import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_QUERY } from './graphqlQueries'; // Define your GraphQL query
import NotFound from './NotFound';

const SearchPoke = () => {
  const [query, setQuery] = useState('');
  const [search, { loading, data }] = useLazyQuery(SEARCH_QUERY);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    search({ variables: { query } });
  };

  return (
    <div>
      <h1>Search Pokemons</h1>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Enter your search query"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : data && data.search.length === 0 ? (
          <NotFound />
        ) : (
          data &&
          data.search.map((result) => (
            <div key={result.id}>{result.title}</div>
            // Render other result data as needed
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPoke;
