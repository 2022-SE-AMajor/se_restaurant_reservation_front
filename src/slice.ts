import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnyAction } from 'redux';
import { Dispatch } from "react";
import { login, } from "./api";
export type InitialStateProp={
  isLogedIn: boolean,
}


export const { actions, reducer } = createSlice({
  name: "app",
  initialState: {
    isLogedIn: false,
  },
  reducers: {
    setLogedInTrue: (state) => ({
     ...state,
     isLogedIn: true
    }),
    setLogedInFalse: (state) => ({
      ...state,
      isLogedIn: false
     }),
  },
});

export const {
  setLogedInTrue,
  setLogedInFalse
} = actions

export function requestLogin({id,password}:any){
  return async (dispatch:Dispatch<AnyAction>,getState:InitialStateProp )=>{
    try {
      console.log("requestLogin 진입")
      login({id,password}).then(response =>{
        console.log("response",response)
        if(response.status === 200){
          dispatch(setLogedInTrue());
        }
      })
      // console.log("requestLogin",state)
    }catch (err) {

    }
  }

}