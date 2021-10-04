import '../styles/App.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Routes from './Routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
