import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PokemonDetails from '../containers/PokemonDetails';
import store from '../redux/store';

it('it tests the render of pokemon details page correctly', () => {
  const pokemondetails = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <PokemonDetails />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(pokemondetails).toMatchSnapshot();
});
