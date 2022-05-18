import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 3em;
  padding-right: 3em;
  height: 88px;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: #0d5eba;
`;

const Menu = styled.div``;
const Text = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1.48872e-8px;
  color: #343434;
  padding-left: 0.5em;
  padding-right: 0.5em;
`;

export default function Header() {
  return (
    <Container>
      <Title>wolfgang steakhouse</Title>
      <Menu>
        <Link to="/reserveLook_date">
          <Text>예약 조회</Text>
        </Link>
        <Link to="/reservPage_date">
          <Text>사전 예약</Text>
        </Link>
        <Link to="/modifyList">
          <Text>예약 정보 변경</Text>
        </Link>
        <Link to="/cancle">
          <Text>예약 취소</Text>
        </Link>
        <Link to="/onsiteReserv">
          <Text>현장 예약</Text>
        </Link>
      </Menu>
    </Container>
  );
}
