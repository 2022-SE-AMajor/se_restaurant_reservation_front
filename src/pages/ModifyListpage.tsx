import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Body,
  Container,
  ImageContainer,
  ListTitle,
  ListDescription,
  Title,
  TitleConatiner,
  List,
  ListButton,
  CancleButton,
} from "../components/ModifyListpageComponent";

export default function ModifyListPage() {
  return (
    <Container>
      <Body>
        <TitleConatiner>
          <Title>예약 리스트</Title>
          <List>
            <ImageContainer />
            <ListTitle>예약 리스트1</ListTitle>
            <ListDescription>예약 정보를 이곳에 표시하세요</ListDescription>
            <ListButton>선택하기</ListButton>
          </List>
          <List>
            <ImageContainer />
            <ListTitle>예약 리스트2</ListTitle>
            <ListDescription>예약 정보를 이곳에 표시하세요</ListDescription>
            <ListButton>선택하기</ListButton>
          </List>
          <Link to="/modifyList_date">
            <CancleButton>예약 수정</CancleButton>
          </Link>
        </TitleConatiner>
      </Body>
    </Container>
  );
}
