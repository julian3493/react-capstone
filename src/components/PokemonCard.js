import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PokemonCard = () => {
  const pokemons = useSelector((state) => state.allPokemons.pokemons);
  return pokemons.map((pokemon) => {
    const { id, name } = pokemon;
    return (
      <div className="tile is-4 is-child box" key={id}>
        <Link to={`/pokemon/${id}`}>
          <div className="card">
            <div className="card-header is-vertical">
              <p className="card-header-title is-capitalized">
                #
                {id}
                &nbsp;
                {name}
              </p>
            </div>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
              </figure>
            </div>
          </div>
        </Link>
      </div>
    );
  });
};

export default PokemonCard;
