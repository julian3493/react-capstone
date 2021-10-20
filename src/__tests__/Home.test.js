import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from '../containers/Home';
import store from '../redux/store';

describe('render correctly the navbar componet', () => {
  it('renders the navbar brand', () => {
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

  it('renders a not null navbar brand', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const navbar = document.querySelector('.navbar');
    expect(navbar.firstElementChild).not.toBe(null);
  });

  it('renders the navbar select', () => {
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

  it('renders a not null navbar select', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const navbar = document.querySelector('.navbar');
    expect(navbar.lastElementChild).not.toBe(null);
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

  it('renders a not null grid container', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const gridContainer = document.querySelector('.is-ancestor');
    expect(gridContainer).not.toBe(null);
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

  it('renders a not null grid', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const gridContainer = document.querySelector('.is-ancestor');
    expect(gridContainer.firstElementChild).not.toBe(null);
  });
});
