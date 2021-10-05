import renderer from 'react-test-renderer';
import App from '../components/App';

it('it tests the render App correctly', () => {
  const calculator = renderer
    .create(<App />)
    .toJSON();
  expect(calculator).toMatchSnapshot();
});
