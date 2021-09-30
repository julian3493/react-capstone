import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import pokemonTypesContainer from '../components/pokemonTypesContainer';
import { selectedPokemon } from '../redux/actions/actions';
import '../styles/pokemonDetails.css';

const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const pokemon = useSelector((state) => state.selectedPokemon);
  const {
    name, types, height, weight,
  } = pokemon;
  const dispatch = useDispatch();

  const fetchSelectedPokemon = async () => {
    const response = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .catch((err) => {
        console.log('Error', err);
      });
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
              {pokemonTypesContainer(types)}
              <div className="dimensions">
                <p className="card-info-title">Dimensions</p>
                <ul>
                  <li>
                    Height:
                    &nbsp;
                    {height}
                  </li>
                  <li>
                    Weight:
                    &nbsp;
                    {weight}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
