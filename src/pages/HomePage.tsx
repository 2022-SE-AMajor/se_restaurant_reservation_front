import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  Body,
  Container,
  IconContainer,
  Row,
  RowsContainer,
  RowText,
  RowTitleText,
  ImageContainer,
  Title,
  TitleConatiner,
  ButtonContainer,
  ImageCancle,
  ImageModify,
  ImageReserv,
  SubTitle,
} from "../components/HomePageComponent";

export default function HomePage(){
  return (
    <Container>
      <Body>
        <TitleConatiner>
          <ImageContainer />
          <Title>레스토랑 예약 메뉴</Title> 
        </TitleConatiner>
        <ButtonContainer>
          <Link to="/onsiteReserv">
            <ImageReserv />
            <SubTitle>예약</SubTitle>
          </Link>
          <Link to="/cancle">
            <ImageCancle />
            <SubTitle>예약 취소</SubTitle>
          </Link>
          <Link to="/modifyList">
            <ImageModify />
            <SubTitle>예약 수정</SubTitle>
          </Link>
        </ButtonContainer>
      </Body>
    </Container>
  );
}
