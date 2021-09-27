import { SET_POKEMONS } from '../actions/action-types';

const initialState = {
  pokemons: [
    { name: 'bulbasaur', url: 'url' },
  ],
};

const pokemonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POKEMONS:
      return { ...state, pokemons: payload };
    default:
      return state;
  }
};

export default pokemonReducer;
