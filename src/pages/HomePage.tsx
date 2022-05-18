import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Body,
  Container,
  ImageContainer,
  Title,
  TitleConatiner,
  ButtonContainer,
  ImageCheck,
  ImageCancle,
  ImageModify,
  ImageReserv,
  Imagearrival,
  ImageStatistic,
  ImageOnsite,
  SubTitle,
} from "../components/HomePageComponent";

export default function HomePage() {
  return (
    <Container>
      <Body>
        <TitleConatiner>
          <ImageContainer />
          <Title>레스토랑 예약 메뉴</Title>
        </TitleConatiner>
        <ButtonContainer>
          <Link to="/">
            <ImageCheck />
            <SubTitle>예약 조회</SubTitle>
          </Link>
          <Link to="/reservPage_date">
            <ImageReserv />
            <SubTitle>사전 예약</SubTitle>
          </Link>
          <Link to="/modifyList">
            <ImageModify />
            <SubTitle>예약 정보 변경</SubTitle>
          </Link>
          <Link to="/cancle">
            <ImageCancle />
            <SubTitle>예약 취소</SubTitle>
          </Link>
          <Link to="/">
            <Imagearrival />
            <SubTitle>현장 도착</SubTitle>
          </Link>
          <Link to="/statisticPage">
            <ImageStatistic />
            <SubTitle>통계</SubTitle>
          </Link>
          <Link to="/onsiteReserv">
            <ImageOnsite />
            <SubTitle>현장 예약</SubTitle>
          </Link>
        </ButtonContainer>
      </Body>
    </Container>
  );
}
