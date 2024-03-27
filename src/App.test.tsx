// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import React from 'react';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('Display header', async () => {
  render(<App />);

  expect(screen.getByText('Rick and Morty - Fan Service !!!')).toBeInTheDocument();
});
