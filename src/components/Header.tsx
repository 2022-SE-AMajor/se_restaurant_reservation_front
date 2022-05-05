import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { InitialStateProp, setLogedInFalse } from "../slice";

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
  const {isLogedIn} = useSelector((state:InitialStateProp) =>({
    isLogedIn: state.isLogedIn
  }))
  const dispatch = useDispatch()

  return (
    <Container>
      <Title>wolfgang steakhouse</Title>
      <Menu>

      {isLogedIn?
      <Text
      onClick={()=>{
        dispatch(setLogedInFalse())
      }}
    >
      로그아웃
    </Text>:
    null
      }
      
        <Text>예약 조회</Text>
        <Text>사전 예약</Text>
        <Text>예약 정보 변경</Text>
        <Text>예약 취소</Text>
        <Text>현장 예약</Text>
      </Menu>
    </Container>
  );
}
