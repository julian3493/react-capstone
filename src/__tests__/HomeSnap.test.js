import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../containers/Home';
import store from '../redux/store';

it('it tests the render of home page correctly', () => {
  const home = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(home).toMatchSnapshot();
});
