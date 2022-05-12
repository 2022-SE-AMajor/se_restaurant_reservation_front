import React, { useState } from "react";
import { Link } from "react-router-dom";
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
} from "../components/ShowCalendar";
import { useDispatch } from "react-redux";

export default function ReserPage() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  function onClick() {
    const value = this.value;
    setTime((current) => );
    console.log({ time });
  }
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
            <SubmitButton onClick={onClick} value={9}>
              9:00
            </SubmitButton>
            <SubmitButton onClick={onClick} value={10}>
              10:00
            </SubmitButton>
            <SubmitButton onClick={onClick} value={11}>
              11:00
            </SubmitButton>
            <SubmitButton onClick={onClick} value={12}>
              12:00
            </SubmitButton>
            <SubmitButton onClick={onClick} value={13}>
              13:00
            </SubmitButton>
            <SubmitButton onClick={onClick} value={14}>
              14:00
            </SubmitButton>
            <SubmitButton onClick={onClick} value={15}>
              15:00
            </SubmitButton>
            <SubmitButton onClick={onClick} value={16}>
              16:00
            </SubmitButton>
            <SubmitButton onClick={onClick} value={14}>
              17:00
            </SubmitButton>
            <SubmitButton onClick={onClick} value={18}>
              18:00
            </SubmitButton>
          </ButtonContainer>
          <Link to="/">
            <NextButton>next→</NextButton>
          </Link>
        </CalendarContainer>
      </Body>
    </Container>
  );
}
