import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPokemons } from '../redux/actions/actions';
import PokemonCard from '../components/PokemonCard';
import Filter from '../components/FilterOptions';
/* eslint-disable no-await-in-loop */

const Home = () => {
  const dispatch = useDispatch();

  const fetchPokemonsData = async (pokemonArray) => {
    const list = [];
    for (let i = 0; i < pokemonArray.length; i += 1) {
      const pokeData = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonArray[i].name}`)
        .catch((err) => {
          console.log('Error', err);
        });
      list.push(pokeData.data);
    }
    dispatch(setPokemons(list));
  };

  const fetchPokemons = async () => {
    const response = await axios
      .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
      .catch((err) => {
        console.log('Error', err);
      });
    fetchPokemonsData(response.data.results);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);
  return (
    <div className="container is-centered">
      <Filter />
      <div className="tile is-ancestor">
        <div className="tile is-12 is-parent is-flex-wrap-wrap">
          <PokemonCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
