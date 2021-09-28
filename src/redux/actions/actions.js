import { SELECTED_POKEMON, SET_POKEMONS } from './action-types';

export const setPokemons = (pokemons) => ({
  type: SET_POKEMONS,
  payload: pokemons,
});

export const selectedPokemon = (pokemon) => ({
  type: SELECTED_POKEMON,
  payload: pokemon,
});
