import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
  const { pokemonId } = useParams();

  return (
    <h1>
      Pokemon page
      {pokemonId}
    </h1>
  );
};

export default PokemonDetails;
