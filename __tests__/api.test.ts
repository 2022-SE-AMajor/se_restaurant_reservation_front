import { login } from './../src/api';

import axios from 'axios';

jest.mock("axios", () => ({
    ...jest.requireActual('axios'),
    post: jest.fn((_body) => { 
      return new Promise((resolve) => {
        resolve(_body)
      })
    })
  }))




describe('', () => {
    const mockAxios = (data)=>{
        axios.post.mockImplementation((data)=>{
            return  data;
        })
    }
    
    describe('request login',()=>{
        beforeEach(() => {
            mockAxios({id:"test",password:"test"});
          });
          it("", ()=>{
             login({
                id: 'test',
                password: 'test'
            }).then(result =>{
                expect(result).toEqual({
                    id: 'test',
                    password: 'test'
                });
    
            });
          })  
    })
    
})