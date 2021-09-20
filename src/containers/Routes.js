import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Pokemon from './Pokemon';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/pokemon" component={Pokemon} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
