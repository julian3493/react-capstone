import renderer from 'react-test-renderer'
import PokemonDetails from '../containers/PokemonDetails';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter } from 'react-router-dom';

it('it tests the render of pokemon details page correctly', () => {
  const calculator = renderer
    .create(
    <Provider store={store}>
      <BrowserRouter>
        <PokemonDetails />
      </BrowserRouter>
    </Provider>)
    .toJSON();
  expect(calculator).toMatchSnapshot();
});