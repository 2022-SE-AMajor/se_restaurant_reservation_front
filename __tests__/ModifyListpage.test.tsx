import React from 'react';
import { render, screen } from '@testing-library/react';
import ModifyListPage from '../src/pages/ModifyListpage';
import { MemoryRouter } from 'react-router-dom';

function renderApp() {
  return render((
    <MemoryRouter>
      <ModifyListPage />
    </MemoryRouter>
  ))
}

describe('isLogedIn is false', () => {
  it('with path /', () => {
    const { getByText } = renderApp()
    expect(getByText("예약 리스트")).not.toBeNull()
    // expect(getByText("선택하기")).not.toBeNull()
    expect(getByText("예약 수정")).not.toBeNull()
  })
})
