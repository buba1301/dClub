import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from './index';

test('render Logo componnent', () => {
  render(<Logo />);

  const logo = screen.getByTestId('logo');
  expect(logo).toBeInTheDocument();

  const brandName = screen.getByText(/perivery blub/i);
  expect(brandName).toBeInTheDocument();
});
