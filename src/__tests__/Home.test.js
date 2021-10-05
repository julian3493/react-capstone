import renderer from 'react-test-renderer';
import Home from '../containers/Home';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter } from 'react-router-dom';

it('it tests the render of home page correctly', () => {
  const calculator = renderer
    .create(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>)
    .toJSON();
  expect(calculator).toMatchSnapshot();
});
