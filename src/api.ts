import  axios, { AxiosResponse } from 'axios'

const baseURL = `http://192.168.45.104:4000`

const api = axios.create({
    baseURL:baseURL,
    // baseURL: "localhost:4000"
  });

export type LoginProps={
    id:string,
    password:string
}

export type ReadReservationProps = {
    date:string,
    time:string
}

export type MakeReservationProps = ReadReservationProps&{
    tableId:string;
    name:string;
    covers:string;
    phoneNumber:string;
}

export type CancelReservationProp = {
    oid:string;
}

export type RecordArrivalProps ={
    table_id:string;
    date:string;
    time:string;
}

export type ModifyReservationProps = MakeReservationProps&ReadReservationProps&{
    oid:string;
}

export const login = ({id,password}:LoginProps) :Promise<AxiosResponse<any>> =>api.post('/login',{
    id,
    password
});

export const readReservation = ({date,time}:ReadReservationProps) :Promise<AxiosResponse<any>> =>{
    const year = date.split('-')[0];
    const month = date.split('-')[1];
    const theDate = date.split('-')[2];
   return api.post('/readReservation',{
        year,
        month,
        date:theDate,
        time:time+":00"
})
};

export const makeReservation = ({date,time,tableId,name,covers,phoneNumber}:MakeReservationProps):Promise<AxiosResponse<any>>=>{
    return api.post(`/reserve/?date=${date}&time=${time}:00`,{
        table_id:tableId,
        name,
        covers,
        phone_number:phoneNumber
})
}

// export const cancelReservation = ({oid}:CancelReservationProp):Promise<AxiosResponse<any>>=>{
    // return api.delete(`/delete`,{oid})
// }

export const cancelReservation =(oid:string):Promise<AxiosResponse<any>>=>api.post('/delete',{oid})

export const recordArrival = ({table_id, date, time}:RecordArrivalProps):Promise<AxiosResponse<any>>=> api.post('/arrivetime',{
    table_id, 
    date,
    time
})

export const getArrival = (oid:string):Promise<AxiosResponse<any>>=> api.get(`/arrivetime/${oid}`)

export const modifyReservation = ({oid,date,time, covers, tableId,name, phoneNumber}:ModifyReservationProps):Promise<AxiosResponse<any>>=>api.post(`/modifyReservation/${oid}?time=${time}&date=${date}:00`,{
    table_id:tableId,
    name,
    covers,
    phone_number:phoneNumber
})