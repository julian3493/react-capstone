import { SELECTED_POKEMON, SET_POKEMONS } from '../actions/action-types';

const initialState = {
  pokemons: [
    { name: 'bulbasaur', url: 'url' },
  ],
};

export const pokemonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POKEMONS:
      return { ...state, pokemons: payload };
    default:
      return state;
  }
};

export const selectedPokemonReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_POKEMON:
      return { ...state, ...payload };
    default:
      return state;
  }
};
