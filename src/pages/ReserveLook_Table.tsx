/*예약조회 테이블*/
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { readReservation } from "../api";
import BookedInfo from "../components/BookedInfo";
import {
  Body,
  Container,
  ImageContainer,
  TableContainer,
  Table,
  SelectContainer,
  Select,
  NextButton,
  Date,
  Time,
  Header,
} from "../components/ModifyListpage_tableComponent";
import NotBookedInfo from "../components/NotBookedInfo";
import { InitialStateProp, setRefresh } from "../slice";

type TablesProps = {
  date: string;
  time: string
}

export type ReservationInfoProps = {
  covers: number;
  name: string;
  oid: number
  phone_number: string
  table_id: number
  state: number
}


export default function ReserveLook_Table({ date, time }: TablesProps) {
  console.log(date, time)
  // const [chosenDate, chooseDate] = useState('')
  const [tableId, setTableId] = useState('')
  const [bookInfo, setBookInfo] = useState<ReservationInfoProps>();
  const [reservations, serReservations] = useState<ReservationInfoProps[]>([])
  const { refresh } = useSelector((state: InitialStateProp) => ({
    refresh: state.refresh
  }))
  const tableIds = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
  ]

  // const dispatch = useDispatch()

  useEffect(() => {
    readReservation({ date, time }).then(res => {
      const results = res.data.result
      results.pop()
      serReservations(results)
      console.log(results)
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      // dispatch(setRefresh(false))
    });
    setTableId('')
  }, [date, time, refresh])

  useEffect(() => {
    const tableInfo: ReservationInfoProps[] = reservations.filter(aRes => aRes.table_id === parseInt(tableId))
    if (tableId === '' || tableInfo.length === 0) {
      setBookInfo(undefined)
      return
    }
    // console.log("useEffect", tableId)

    setBookInfo({
      covers: tableInfo[0].covers,
      name: tableInfo[0].name,
      oid: tableInfo[0].oid,
      phone_number: tableInfo[0].phone_number,
      table_id: tableInfo[0].table_id,
      state: tableInfo[0].state,
    })

  }, [tableId])


  return (
    <Container>
      {/* <Body> */}
      {/* <ImageContainer /> */}
      <Header>
        <Date>{date}</Date>
        <Time>{time}</Time>
      </Header>
      <TableContainer>
        {tableIds.map(aTableId => {
          let reservationState = 0
          const res = reservations.filter(aRes => aRes.table_id === parseInt(aTableId))
          if (res.length > 0) {
            reservationState = res[0].state
          }
          return <Table
            key={aTableId}
            name={`${reservationState}`}
            value={aTableId === tableId ? "checked" : "unchecked"}
            onClick={() => {
              console.log(aTableId + '을 눌렀습니다.')
              return setTableId(aTableId)
            }}
          >
            {aTableId}번
          </Table>
        })}
      </TableContainer>
      {
        tableId === '' ? null :
          bookInfo ?
            <BookedInfo
              tableId={tableId}
              bookInfo={bookInfo}
              date={date}
              time={time}
            /> :
            <NotBookedInfo
              tableId={tableId}
              date={date}
              time={time}
            />
      }
      {/* </Body> */}
    </Container>
  );
}
