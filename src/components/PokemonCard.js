import React from 'react';
import { useSelector } from 'react-redux';

const PokemonCard = () => {
  const pokemons = useSelector((state) => state.allPokemons.pokemons);
  console.log(pokemons);
  return pokemons.map((pokemon) => {
    const { name, url } = pokemon;
    return (
      <div className="tile is-4 is-child box" key={url}>
        <div className="card">
          <div className="card-header">
            { name }
          </div>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
            </figure>
          </div>
        </div>
      </div>
    );
  });
};

export default PokemonCard;
