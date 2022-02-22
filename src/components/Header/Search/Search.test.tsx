import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Search from './index';

test('render search component', () => {
  render(<Search />);
  const searchIcon = screen.getByTestId('searchIcon');
  expect(searchIcon).toBeInTheDocument();
  const searchLabel = screen.getByText(/поиск/i);
  expect(searchLabel).toBeInTheDocument();
});

test('user click on search component', () => {
  render(<Search />);

  const btn = screen.getByRole('button');

  userEvent.click(btn);

  const input = screen.getByPlaceholderText(/Ресторан, блюдо или товар/i);
  expect(input).toBeInTheDocument();

  const closeButton = screen.getByTestId('closeIcon');
  expect(closeButton).toBeInTheDocument();
});
