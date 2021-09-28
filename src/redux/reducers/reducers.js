import { combineReducers } from 'redux';
import { pokemonReducer, selectedPokemonReducer } from './pokemonReducers';

const reducers = combineReducers({
  allPokemons: pokemonReducer,
  selectedPokemon: selectedPokemonReducer,
});

export default reducers;
