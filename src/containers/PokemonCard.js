import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const getPokemonTypes = (pokemon) => {
  const typesObjects = pokemon.types;
  const types = [];
  typesObjects.forEach((element) => {
    types.push(element.type.name);
  });
  return types;
};

const PokemonCard = () => {
  const pokemons = useSelector((state) => state.allPokemons.pokemons);
  const filters = useSelector((state) => state.filters);
  const filteredPokemon = (list, filter) => {
    if (filters.filter_type && filters.filter_type !== '') {
      return list.filter((pokemon) => {
        const types = getPokemonTypes(pokemon);
        return types.includes(filter.filter_type);
      });
    }
    return list;
  };

  const filteredPokemons = filteredPokemon(pokemons, filters);
  return filteredPokemons.map((pokemon) => {
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

getPokemonTypes.propTypes = {
  pokemon: PropTypes.shape({
    abilities: PropTypes.arrayOf,
    height: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    stats: PropTypes.arrayOf,
    types: PropTypes.arrayOf,
    weight: PropTypes.number,
  }),
};

export default PokemonCard;
