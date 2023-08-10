
import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonEntry from "./Pokemonentry";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState("");
  const [pokemonEntries, setPokemonEntries] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [sortBy, setSortBy] = useState("name"); // Default sort by name
  const [filterAbilities, setFilterAbilities] = useState(false);
  const [filterTypes, setFilterTypes] = useState(false);

  useEffect(() => {
    fetchPokemonEntries();
  }, [pageNumber, sortBy, filterAbilities, filterTypes]);

  const handleInputChange = (e) => {
    setPokemonName(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setError("");
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      setPokemonData(response.data);

      // Add the fetched Pokemon entry to the server
      try {
        const serverResponse = await axios.post("/api/pokemon", {
          name: response.data.name,
          image: response.data.sprites.front_default,
          type: response.data.types[0].type.name, // Assuming the first type represents the main type
        });
        setPokemonEntries([...pokemonEntries, serverResponse.data]);
      } catch (err) {
        setError("Failed to add the Pokemon.");
      }
    } catch (err) {
      setError("Pokemon not found. Please enter a valid name.");
      setPokemonData(null);
    }
  };

  const handleDelete = async (name) => {
    try {
      // Delete the Pokemon entry from the server
      await axios.delete(`/api/pokemon/${name}`);
      const updatedEntries = pokemonEntries.filter(
        (entry) => entry.name !== name
      );
      setPokemonEntries(updatedEntries);
    } catch (err) {
      setError("Failed to delete the Pokemon entry.");
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setPageNumber(1); // Reset the page number when sorting changes
    setPokemonEntries([]); // Clear existing entries when sorting changes
    setHasMore(true); // Reset infinite scroll
  };

  const handleFilterAbilitiesChange = () => {
    setFilterAbilities(!filterAbilities);
    setPageNumber(1); // Reset the page number when filter changes
    setPokemonEntries([]); // Clear existing entries when filter changes
    setHasMore(true); // Reset infinite scroll
  };

  const handleFilterTypesChange = () => {
    setFilterTypes(!filterTypes);
    setPageNumber(1); // Reset the page number when filter changes
    setPokemonEntries([]); // Clear existing entries when filter changes
    setHasMore(true); // Reset infinite scroll
  };



  const fetchPokemonEntries = async () => {
    try {
      let apiUrl = `/api/pokemon?page=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}`;
      if (filterAbilities) {
        apiUrl += "&filterAbilities=true";
      }
      if (filterTypes) {
        apiUrl += "&filterTypes=true";
      }

      const response = await axios.get(apiUrl);
      const newEntries = response.data;
      if (newEntries.length === 0) {
        setHasMore(false);
      } else {
        setPokemonEntries([...pokemonEntries, ...newEntries]);
      }
    } catch (err) {
      setError("Failed to fetch Pokemon entries.");
    }
  };

  const loadMore = () => {
    setPageNumber(pageNumber + 1);
  };


const Home = () => {
  return (
    <div className="container">

      <h1 className="my-4">Pokemon Tracker</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mr-2"
          value={pokemonName}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="form-group">
        <label htmlFor="sortSelect">Sort By:</label>
        <select
          id="sortSelect"
          className="form-control"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="name">Name</option>
          <option value="weight">Weight</option>
          <option value="height">Height</option>
        </select>
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="abilitiesCheck"
          checked={filterAbilities}
          onChange={handleFilterAbilitiesChange}
        />
        <label className="form-check-label" htmlFor="abilitiesCheck">
          Filter by Abilities
        </label>
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="typesCheck"
          checked={filterTypes}
          onChange={handleFilterTypesChange}
        />
        <label className="form-check-label" htmlFor="typesCheck">
          Filter by Types
        </label>
      </div>
      {error && <p className="error-message">{error}</p>}
      {pokemonData && error}
      {pokemonData && pokemonData.name !== "" && (
        <div className="row">
          <InfiniteScroll
            dataLength={pokemonEntries.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more Pokemon entries to display.</p>}
          >
            {pokemonEntries.map((entry, index) => (
              <div
                className={`col-md-3 mb-4 PokemonEntry ${entry.type}`}
                key={index}
              >
                <PokemonEntry
                  name={entry.name}
                  image={entry.image}
                  type={entry.type} // Pass the type as a prop
                  onDelete={handleDelete}
                />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      )}
      

    </div>

  );
};

export default Home;