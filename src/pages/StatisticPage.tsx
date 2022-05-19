import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Body,
  Container,
  CalendarContainer,
  DayTitle,
  DayReservContainer,
  DayReserv,
  RightContainer,
  MonthReservContainer,
  MonthReserv,
  MonthTitle,
  MonthSubTitle,
  BottomContainer,
  PreviousButton,
} from "../components/StatisticPageComponent";

export default function StatisticPage() {
  const [date, setDate] = useState(new Date());
  return (
    <Container>
      <Body>
        <CalendarContainer>
          <Calendar
            onChange={setDate}
            value={date}
            showNeighboringMonth={false}
          />
        </CalendarContainer>
        <RightContainer>
          <DayTitle>2020년 6월 12일 예약 기록</DayTitle>
          <DayReservContainer>
            <DayReserv>예약 내역1</DayReserv>
            <DayReserv>예약 내역2</DayReserv>
            <DayReserv>예약 내역3</DayReserv>
          </DayReservContainer>
        </RightContainer>
        <BottomContainer>
          <MonthTitle>2020년 6월 예약 전체 통계</MonthTitle>
          <MonthReservContainer>
            <MonthReserv>
              <MonthSubTitle>노쇼 팀 통계</MonthSubTitle>
            </MonthReserv>
            <MonthReserv>
              <MonthSubTitle>요일별 예약 빈도 통계</MonthSubTitle>
            </MonthReserv>
            <MonthReserv>
              <MonthSubTitle>예약 인원 통계</MonthSubTitle>
            </MonthReserv>
          </MonthReservContainer>
        </BottomContainer>
        <Link to="/">
          <PreviousButton>previous</PreviousButton>
        </Link>
      </Body>
    </Container>
  );
}
