import React, { useState } from "react";
import {
  Body,
  Container,
  IdInput,
  ImageContainer,
  LoginContainer,
  LoigInForm,
  PsInput,
  TimeButton,
  SubTitle,
  Title,
  TitleConatiner,
} from "../components/LoginPageComponents";

import { useDispatch } from "react-redux";
import { requestLogin } from "../slice";
import { useNavigate } from "react-router-dom";

export default function LogInPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigate()

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setId(value);
  };
  const handlePsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch<any>(requestLogin({ id, password }));
    navigation('/')
  };

  return (
    <Container>
      <Body>
        <LoginContainer>
          <TitleConatiner>
            <Title>레스토랑 예약하기</Title>
            <SubTitle>당신의 계정을 입력하세요</SubTitle>
          </TitleConatiner>
          <LoigInForm onSubmit={handleSubmit}>
            <IdInput onChange={handleIdChange} value={id} />
            <PsInput onChange={handlePsChange} value={password} />
            <TimeButton>Log In</TimeButton>
          </LoigInForm>
        </LoginContainer>
        <ImageContainer />
      </Body>
    </Container>
  );
}
