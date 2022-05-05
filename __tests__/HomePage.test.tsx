import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import CanclePage from '../src/pages/Canclepage';
import HomePage from '../src/pages/HomePage';
import { MemoryRouter } from 'react-router-dom';

function renderApp() {
  return render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ))
}

describe('isLogedIn is false', () => {
  it('with path /', () => {
    const { getByText } = renderApp()
    expect(getByText("레스토랑 예약 메뉴")).not.toBeNull()
    expect(getByText("예약")).not.toBeNull()
    expect(getByText("예약 취소")).not.toBeNull()
    expect(getByText("예약 수정")).not.toBeNull()
  })
})


