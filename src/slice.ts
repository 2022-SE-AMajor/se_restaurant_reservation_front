import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnyAction } from 'redux';
import { Dispatch } from "react";
import { login, } from "./api";
export type InitialStateProp={
  isLogedIn: boolean;
  refresh:boolean;
}


export const { actions, reducer } = createSlice({
  name: "app",
  initialState: {
    isLogedIn: false,
    refresh:false,
  },
  reducers: {
    setLogedIn: (state,{payload}) => ({
     ...state,
     isLogedIn: payload
    }),
    setRefresh: (state,{payload}) => ({
      ...state,
      refresh: payload
     }),
  },
});

export const {
  setLogedIn,
  setRefresh,
} = actions

export function requestLogin({id,password}:any){
  return async (dispatch:Dispatch<AnyAction>,getState:InitialStateProp )=>{
    try {
      console.log("requestLogin 진입")
      login({id,password}).then(
        response =>{
        dispatch(setLogedIn(true));
        console.log("response",response)
      }).catch(error=>{
        alert("계정 정보가 잘못되었습니다.")
      })
    }catch (err) {

    }
  }

}