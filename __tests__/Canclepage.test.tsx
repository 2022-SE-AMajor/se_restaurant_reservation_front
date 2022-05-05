import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import CanclePage from '../src/pages/Canclepage';

function renderApp() {
  return render((
    <CanclePage />
  ))
}

describe('isLogedIn is false', () => {
  it('with path /', () => {
    const { getByText } = renderApp()
    expect(getByText("예약 리스트")).not.toBeNull()
    // expect(getByText("선택하기")).not.toBeNull()
    expect(getByText("예약 취소")).not.toBeNull()
  })
})


