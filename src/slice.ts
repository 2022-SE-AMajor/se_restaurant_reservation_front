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
    setLogedIn: (state,{payload}) => ({
     ...state,
     isLogedIn: payload
    }),
  },
});

export const {
  setLogedIn,
} = actions

export function requestLogin({id,password}:any){
  return async (dispatch:Dispatch<AnyAction>,getState:InitialStateProp )=>{
    try {
      console.log("requestLogin 진입")
      login({id,password}).then(response =>{console.log("response",response)})
      // console.log("requestLogin",state)
      
      dispatch(setLogedIn(true));
    }catch (err) {

    }
  }

}