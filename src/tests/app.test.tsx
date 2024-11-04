import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders landingpage', () => {
  render(<App />);
  expect(screen.getByText(/Zoeken naar studievoer?/i)).toBeInTheDocument();
});
