import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducers';

const reducers = combineReducers({
  allPokemons: pokemonReducer,
});

export default reducers;
