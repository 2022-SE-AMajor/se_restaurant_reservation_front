import React from 'react';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import App from '../src/App';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LogInPage from '../src/pages/LogInPage';
import { requestLogin } from '../src/slice';

jest.mock("react-redux")
jest.mock("../src/slice.ts")

function renderApp() {
  return render((
    <LogInPage />
  ))
}

const dispatch = jest.fn();

describe('LogInPage', () => {
  beforeEach(() => {
    useDispatch.mockImplementation((() => dispatch));
  })
  it('renders', () => {
    const { getByText } = renderApp()
    expect(getByText("레스토랑 예약하기")).toBeTruthy()
    expect(getByText("당신의 계정을 입력하세요")).toBeTruthy()
    expect(getByText("레스토랑 예약하기")).toBeTruthy()
  })
  it('아이디, 비밀번호를 입력할 수 있다. ', () => {
    const { getByPlaceholderText } = renderApp()

    fireEvent.change(getByPlaceholderText('아이디'), {
      target: {
        value: 'test'
      }
    })

    fireEvent.change(getByPlaceholderText('비밀번호'), {
      target: {
        value: 'test'
      }
    })
  })

  it('로그인 버튼이 작동한다.', () => {
    const { getByText } = renderApp()

    fireEvent.click(getByText('Log In'))

    expect(dispatch).toBeCalledWith(requestLogin({
      id: "",
      password: ""
    }))
  })


})

