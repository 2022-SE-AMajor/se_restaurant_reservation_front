import reducer,{requestLogin, setLogedInFalse, setLogedInTrue} from '../src/slice'

import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import 'regenerator-runtime'

import axios from 'axios';

jest.mock("axios", () => ({
    ...jest.requireActual('axios'),
    post: jest.fn((_body) => { 
      return new Promise((resolve) => {
        resolve({
            status: 200,
            body:_body
        })
      })
    })
  }))


// import from '../src/slice'

// jest.mock('../src/slice.ts')

describe('setLogedIn', () => {
    it('True', () => {
      const initialState = {
        isLogedIn: false,
    };
      const state = reducer(initialState, setLogedInTrue());
      expect(state.isLogedIn).toBe(true);
    });

    it('False', () => {
        const initialState = {
          isLogedIn: false,
      };
        const state = reducer(initialState, setLogedInFalse());
        expect(state.isLogedIn).toBe(false);
      });
  });


// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);

//   describe('sendReview', () => {
//     let store;

//     beforeEach(() => {
//       store = mockStore(() => ({
//       }));
//     });

//     it('dispatchs requestLogin', () => {
//         console.log("??")
//     store.dispatch(requestLogin({id: 'test',password:'test'})).then((result) => {

//         console.log("??",result);
//         const actions = store.getActions();
//         expect(actions).toEqual(setLogedInTrue());
//     });


//     });
//   });