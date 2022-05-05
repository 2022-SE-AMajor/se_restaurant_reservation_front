import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

// typescript 


test('renders learn react link', () => {
  expect(1+10).toEqual(11)
});

type renderAppProps = {
  path: string
}

describe('App component', () => {
  function renderApp({path}:renderAppProps){
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App/>
      </MemoryRouter>
    ))
  }
  it('with path /',()=>{
      
  })


})