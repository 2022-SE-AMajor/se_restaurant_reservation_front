import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { MemoryRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import OnsiteReservPage from '../src/pages/OnsiteReservpage';

// jest.mock("react-redux")

function renderApp() {
  return render((
    <OnsiteReservPage />
  ))
}

describe('OnsiteReservPage', () => {
  it('renders', () => {
    const { container } = renderApp()
    expect(container).not.toBeNull()
  })
})