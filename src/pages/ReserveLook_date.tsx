/*예약조회 날짜*/
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Body,
  Container,
  ImageContainer,
  TimeButton,
  CalendarContainer,
  ButtonContainer,
  NextButton,
} from "../components/ShowCalendar";
import { useDispatch } from "react-redux";
import ReserveLook_Table from "./ReserveLook_Table";

export default function ReserveLook_date() {
  const { selectDate, selectTime } = useParams();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const times = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00"
  ]
  const dashStyleDate = (YMD: any) => {
    const year = YMD.getFullYear();
    const month = YMD.getMonth() + 1;
    const theDate = YMD.getDate();
    return `${year}-${month >= 10 ? month : '0' + month}-${theDate >= 10 ? theDate : '0' + theDate}`
  }
  useEffect(() => {
    console.log(date);
  }, [date]);
  useEffect(() => {
    console.log(time);
  }, [time]);

  return (
    <Container>
      <Body>
        {/* <ImageContainer /> */}
        <CalendarContainer>
          <Calendar
            onChange={setDate}
            value={date}
            showNeighboringMonth={false}
          />
          <ButtonContainer>
            {times.map(aTime => {
              return <TimeButton key={aTime}
                value={aTime === time ? "checked" : "unchecked"}
                onClick={() => setTime(aTime)}>{aTime}</TimeButton>
            })}

          </ButtonContainer>
        </CalendarContainer>
        {time === "" ? <div
          style={{ flex: 1 }}
        /> :
          <ReserveLook_Table
            date={dashStyleDate(date)}
            time={time}
          />
        }

      </Body>
    </Container>
  );
}
