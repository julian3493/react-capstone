import { combineReducers } from 'redux';
import filterTypeReducer from './filterReducers';
import { pokemonReducer, selectedPokemonReducer } from './pokemonReducers';

const reducers = combineReducers({
  allPokemons: pokemonReducer,
  selectedPokemon: selectedPokemonReducer,
  filters: filterTypeReducer,
});

export default reducers;
