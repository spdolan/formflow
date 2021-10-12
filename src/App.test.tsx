import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders enter user info heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/enter user info/i);
  expect(linkElement).toBeInTheDocument();
});
