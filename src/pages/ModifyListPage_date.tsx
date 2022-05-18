import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Body,
  Container,
  ImageContainer,
  SubmitButton,
  CalendarContainer,
  ButtonContainer,
  NextButton,
} from "../components/ModifyListpage_dateComponent";

export default function ModifyListPage_date() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(0);
  useEffect(() => {
    console.log(date);
  }, [date]);
  useEffect(() => {
    console.log(time);
  }, [time]);
  return (
    <Container>
      <Body>
        <ImageContainer />
        <CalendarContainer>
          <Calendar
            onChange={setDate}
            value={date}
            showNeighboringMonth={false}
          />
          <ButtonContainer>
            <SubmitButton onClick={() => setTime(9)}>9:00</SubmitButton>
            <SubmitButton onClick={() => setTime(10)}>10:00</SubmitButton>
            <SubmitButton onClick={() => setTime(11)}>11:00</SubmitButton>
            <SubmitButton onClick={() => setTime(12)}>12:00</SubmitButton>
            <SubmitButton onClick={() => setTime(13)}>13:00</SubmitButton>
            <SubmitButton onClick={() => setTime(14)}>14:00</SubmitButton>
            <SubmitButton onClick={() => setTime(15)}>15:00</SubmitButton>
            <SubmitButton onClick={() => setTime(16)}>16:00</SubmitButton>
            <SubmitButton onClick={() => setTime(17)}>17:00</SubmitButton>
            <SubmitButton onClick={() => setTime(18)}>18:00</SubmitButton>
          </ButtonContainer>
          <Link to="/modifyList_table/">
            <NextButton>next</NextButton>
          </Link>
        </CalendarContainer>
      </Body>
    </Container>
  );
}
