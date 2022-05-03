import  axios, { AxiosResponse } from 'axios'

const api = axios.create({
    baseURL: "http://localhost:4000",
    // baseURL: "localhost:4000"
  });

export type LoginProps={
    id:string,
    password:string
}

export const login = ({id,password}:LoginProps) :Promise<AxiosResponse<any>> =>api.post('/login',{
    id,
    password
});