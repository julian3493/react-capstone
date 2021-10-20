import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import PokemonDetails from '../containers/PokemonDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/pokemon/:pokemonId" component={PokemonDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
