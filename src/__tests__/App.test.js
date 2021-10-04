import App from '../components/App';
import renderer from 'react-test-renderer';

it('it test the render Home page', () => {
  const calculator = renderer
    .create(<App />)
    .toJSON();
  expect(calculator).toMatchSnapshot();
});
