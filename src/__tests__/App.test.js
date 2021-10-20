import renderer from 'react-test-renderer';
import App from '../components/App';

it('it tests the render App correctly', () => {
  const app = renderer
    .create(<App />)
    .toJSON();
  expect(app).toMatchSnapshot();
});
