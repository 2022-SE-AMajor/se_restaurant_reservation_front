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
          <Link to="/reserveLook_date">
            <ImageCheck />
            <SubTitle>예약 조회</SubTitle>
          </Link>
          <Link to="/statisticPage">
            <ImageStatistic />
            <SubTitle>통계</SubTitle>
          </Link>
        </ButtonContainer>
      </Body>
    </Container>
  );
}
