import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPokemons } from '../redux/actions/actions';

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
    <div>
      <h1>Catalogue</h1>
    </div>
  );
};

export default Home;
