import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
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

describe('render correctly the navbar componet', () => {
  it('render the navbar brand', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const navbar = document.querySelector('.navbar');
    expect(navbar.firstElementChild).toHaveClass('navbar-brand');
  });
  it('render the navbar select', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const navbar = document.querySelector('.navbar');
    expect(navbar.lastElementChild).toHaveClass('navbar-menu');
  });
});

describe('render correctly the grid', () => {
  it('renders the grid container', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const gridContainer = document.querySelector('.is-ancestor');
    expect(gridContainer).toBeDefined();
  });
  it('renders the grid', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const gridContainer = document.querySelector('.is-ancestor');
    expect(gridContainer.firstElementChild).toHaveClass('tile is-parent');
  });
});
