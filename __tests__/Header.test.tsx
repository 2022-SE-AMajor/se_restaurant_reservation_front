import React from 'react';
import { fireEvent, render, } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../src/components/Header';

jest.mock("react-redux")

function renderApp() {
  return render((
    <Header />
  ))
}

describe('OnsiteReservPage', () => {

  it('로그인 되어있으면 로그아웃 표시', () => {
    useSelector.mockImplementation((selector) => selector({
      isLogedIn: true
    }))
    const { queryByText } = renderApp()
    expect(queryByText('로그아웃')).not.toBeNull()
  })

  it('로그인 안되어있으안 로그아웃 표시안함', () => {
    useSelector.mockImplementation((selector) => selector({
      isLogedIn: false
    }))
    const { queryByText } = renderApp()
    expect(queryByText('로그아웃')).toBeNull()
  })
})

describe('', () => {
  const dispatch = jest.fn();

  it('', () => {
    useSelector.mockImplementation((selector) => selector({
      isLogedIn: true
    }))
    useDispatch.mockImplementation(() => dispatch)
    const { queryByText } = renderApp()
    fireEvent.click(queryByText("로그아웃"))
    expect(dispatch).toBeCalled()
  })
})