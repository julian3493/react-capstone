import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedPokemon } from '../redux/actions/actions';

const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const pokemon = useSelector((state) => state.selectedPokemon);
  const {
    name, stats, types, height, weight,
  } = pokemon;
  const dispatch = useDispatch();
  console.log(stats, types, height, weight);

  const fetchSelectedPokemon = async () => {
    const response = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .catch((err) => {
        console.log('Error', err);
      });
    console.log(response.data);
    dispatch(selectedPokemon(response.data));
  };

  useEffect(() => {
    fetchSelectedPokemon();
  }, [pokemonId]);

  return (
    <div className="section is-medium">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <p className="card-header-title is-capitalized">
              #
              {pokemonId}
              &nbsp;
              {name}
            </p>
          </div>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <p>
                Height:
                {height}
              </p>
              <p>
                Weight:
                {weight}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
