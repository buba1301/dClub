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

  const closeButton = screen.getByTestId('closeIcon');
  expect(closeButton).toBeInTheDocument();

  const input = screen.getByPlaceholderText(
    /Ресторан, блюдо или товар/i,
  ) as HTMLInputElement;
  expect(input).toBeInTheDocument();

  expect(input.value).toBe('');
  userEvent.type(input, 'burger');
  expect(input.value).toBe('burger');
});
