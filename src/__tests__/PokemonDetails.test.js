import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import PokemonDetails from '../containers/PokemonDetails';
import store from '../redux/store';

describe('render correctly the pokemon card details', () => {
  it('renders an element card', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PokemonDetails />
        </BrowserRouter>
      </Provider>,
    );
    const pokemonCardDetails = document.querySelector('.card');
    expect(pokemonCardDetails).toBeDefined();
  });

  it('renders a header in the card', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PokemonDetails />
        </BrowserRouter>
      </Provider>,
    );
    const pokemonCardDetails = document.querySelector('.card');
    const cardHeader = document.querySelector('.card-header');
    expect(pokemonCardDetails.firstElementChild).toEqual(cardHeader);
  });

  it('renders an image container in the card', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PokemonDetails />
        </BrowserRouter>
      </Provider>,
    );
    const pokemonCardDetails = document.querySelector('.card');
    const cardImage = document.querySelector('.card-image');
    expect(pokemonCardDetails.children[1]).toEqual(cardImage);
  });

  it('renders a content in the card', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PokemonDetails />
        </BrowserRouter>
      </Provider>,
    );
    const pokemonCardDetails = document.querySelector('.card');
    const cardContent = document.querySelector('.card-content');
    expect(pokemonCardDetails.children[2]).toEqual(cardContent);
  });

  it('renders a back button in the card', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PokemonDetails />
        </BrowserRouter>
      </Provider>,
    );
    const pokemonCardDetails = document.querySelector('.card');
    const cardContent = document.querySelector('.backLink');
    expect(pokemonCardDetails.lastElementChild).toEqual(cardContent);
  });
});
