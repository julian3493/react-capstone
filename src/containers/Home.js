import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPokemons } from '../redux/actions/actions';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const dispatch = useDispatch();

  const fetchPokemons = async () => {
    const response = await axios
      .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
      .catch((err) => {
        console.log('Error', err);
      });
    dispatch(setPokemons(response.data.results));
  };

  useEffect(() => {
    fetchPokemons();
  }, []);
  return (
    <div className="container is-centered">
      <h1 className="title is-1">Catalogue</h1>
      <div className="tile is-ancestor">
        <div className="tile is-12 is-parent is-flex-wrap-wrap">
          <PokemonCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
