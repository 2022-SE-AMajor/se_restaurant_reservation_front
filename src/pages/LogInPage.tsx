import React, { useState } from 'react'


import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from"react-icons/ai"
import { Body, 
    Container, Footer, IconContainer, IdInput, ImageContainer, LoginContainer, LoigInForm, PsInput, Row, RowsContainer, RowText, RowTitleText, SubmitButton, SubTitle, Title, TitleConatiner } from '../components/LoginPageComponents';

export default function LogInPage() {

    const [id,setId] = useState('');
    const [password,setPassword] = useState('');

    const handleIdChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setId(value);
    }
    const handlePsChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setPassword(value);
        
    }
    const handleSubmit= (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(id, password)
    }


  return (
    <Container>
        <Body>
            <LoginContainer>
                <TitleConatiner>
                    <Title>
                        레스토랑 예약하기
                    </Title>
                    <SubTitle>
                        당신의 계정을 입력하세요
                    </SubTitle>
                </TitleConatiner>
                <LoigInForm
                    onSubmit={handleSubmit}
                >
                    <IdInput
                        onChange={handleIdChange}
                        value={id}
                    />
                    <PsInput
                        onChange={handlePsChange}
                        value={password}
                    />
                    <SubmitButton>
                        Log In
                    </SubmitButton>
                </LoigInForm>
            </LoginContainer>
            <ImageContainer/>
        </Body>
        <Footer>
        <IconContainer>
            <AiFillTwitterCircle 
                style={{
                    paddingLeft:10
                }}
                size={50}
            />
            <AiFillFacebook
                style={{
                    paddingLeft:10
                }}
                size={50}
             />
            <AiFillInstagram
                style={{
                    paddingLeft:10
                }}
                size={50}
             />
        </IconContainer>
        <RowsContainer>
            <Row>
                <RowTitleText>
                    Product
                </RowTitleText>
                <RowText>
                    Terms of Service
                </RowText>
                <RowText>
                    Privacy Policy
                </RowText>
                <RowText>
                    FAQ
                </RowText>
            </Row>
            <Row>
                <RowTitleText>
                    Resources
                </RowTitleText>
                <RowText>
                    Documentation
                </RowText>
                <RowText>
                    Case Studies
                </RowText>
            </Row>
            <Row>
                <RowTitleText>
                    Company
                </RowTitleText>
                <RowText>
                    About Us               
                </RowText>
                <RowText>
                    Contact Us
                </RowText>
            </Row>
        </RowsContainer>
        </Footer>
    </Container>
  )
}
