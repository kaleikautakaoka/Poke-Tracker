import React from 'react';

const PokemonEntry = ({ name, image, type, onDelete }) => {
  return (
    <div className="PokemonEntry">
      <img src={image} alt={`${name}`} />
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <button className="btn btn-danger" onClick={() => onDelete(name)}>Delete</button>
    </div>
  );
};

export default PokemonEntry;
//test why

