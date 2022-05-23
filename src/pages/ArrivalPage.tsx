import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
  ButtonContainer,
  TimeButton,
} from "../components/ArrivalPageComponenet";

export default function ArrivalPage() {
  const SelectBox1 = () => {
    return (
      <Select>
        <option value="1">Table 1</option>
        <option value="2">Table 2</option>
        <option value="3">Table 3</option>
        <option value="4">Table 4</option>
        <option value="5">Table 5</option>
        <option value="6">Table 6</option>
        <option value="7">Table 7</option>
        <option value="8">Table 8</option>
        <option value="9">Table 9</option>
        <option value="10">Table 10</option>
        <option value="11">Table 11</option>
        <option value="12">Table 12</option>
        <option value="13">Table 13</option>
        <option value="14">Table 14</option>
        <option value="15">Table 15</option>
        <option value="16">Table 16</option>
      </Select>
    );
  };
  const SelectBox2 = () => {
    return (
      <Select>
        <option value="1">1 People</option>
        <option value="2">2 People</option>
        <option value="3">3 People</option>
        <option value="4">4 People</option>
      </Select>
    );
  };
  const [isSelect, setIsSelect] = useState(0);
  const [time, setTime] = useState(0);

  return (
    <Container>
      <Body>
        <ImageContainer />
        <ButtonContainer>
          <TimeButton onClick={() => setTime(9)}>9:00</TimeButton>
          <TimeButton onClick={() => setTime(10)}>10:00</TimeButton>
          <TimeButton onClick={() => setTime(11)}>11:00</TimeButton>
          <TimeButton onClick={() => setTime(12)}>12:00</TimeButton>
          <TimeButton onClick={() => setTime(13)}>13:00</TimeButton>
          <TimeButton onClick={() => setTime(14)}>14:00</TimeButton>
          <TimeButton onClick={() => setTime(15)}>15:00</TimeButton>
          <TimeButton onClick={() => setTime(16)}>16:00</TimeButton>
          <TimeButton onClick={() => setTime(17)}>17:00</TimeButton>
          <TimeButton onClick={() => setTime(18)}>18:00</TimeButton>
        </ButtonContainer>
        <Date>2020.6.4</Date>
        <Time>16:00</Time>
        <TableContainer>
          <Table onClick={() => setIsSelect(1)} />
          <Table onClick={() => setIsSelect(2)} />
          <Table onClick={() => setIsSelect(3)} />
          <Table onClick={() => setIsSelect(4)} />
          <Table onClick={() => setIsSelect(5)} />
          <Table onClick={() => setIsSelect(6)} />
          <Table onClick={() => setIsSelect(7)} />
          <Table onClick={() => setIsSelect(8)} />
          <Table onClick={() => setIsSelect(9)} />
          <Table onClick={() => setIsSelect(10)} />
          <Table onClick={() => setIsSelect(11)} />
          <Table onClick={() => setIsSelect(12)} />
          <Table onClick={() => setIsSelect(13)} />
          <Table onClick={() => setIsSelect(14)} />
          <Table onClick={() => setIsSelect(15)} />
          <Table onClick={() => setIsSelect(16)} />
          <SelectContainer>
            테이블 선택
            <SelectBox1 />
          </SelectContainer>
          <SelectContainer>
            인원수 선택
            <SelectBox2 />
          </SelectContainer>
          <NextButton>next</NextButton>
        </TableContainer>
      </Body>
    </Container>
  );
}
