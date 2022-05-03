import React, { useState } from "react";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  Body,
  Container,
  Footer,
  IconContainer,
  Row,
  RowsContainer,
  RowText,
  RowTitleText,
  ImageContainer,
  ListTitle,
  ListDescription,
  Title,
  TitleConatiner,
  List,
  InputCheckbox,
  ListButton,
  CancleButton,
} from "../components/ShowList";

export default function CanclePage() {
  return (
    <Container>
      <Body>
        <TitleConatiner>
          <Title>예약 리스트</Title>
          <List>
            <InputCheckbox />
            <ImageContainer />
            <ListTitle>예약 리스트1</ListTitle>
            <ListDescription>예약 정보를 이곳에 표시하세요</ListDescription>
            <ListButton>선택하기</ListButton>
          </List>
          <List>
            <InputCheckbox />
            <ImageContainer />
            <ListTitle>예약 리스트2</ListTitle>
            <ListDescription>예약 정보를 이곳에 표시하세요</ListDescription>
            <ListButton>선택하기</ListButton>
          </List>
          <CancleButton>예약 취소</CancleButton>
        </TitleConatiner>
      </Body>
    </Container>
  );
}
