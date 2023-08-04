import React, { useState } from 'react';

const SearchPage = () => {
  // State to hold the search query and search results
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Function to handle the search query change
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  // Function to handle the search button click
  const handleSearch = () => {
    // no functional code, needs to be added.
    const dummyResults = ['Result 1', 'Result 2', 'Result 3'];
    setResults(dummyResults);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Enter your search query"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {/* Display the search results */}
        {results.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;