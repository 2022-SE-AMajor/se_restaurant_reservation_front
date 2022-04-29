import styled from "styled-components"

import banner from '../images/banner1.png';

export const Container = styled.div`
display: flex;
flex-direction: column;

`

export const Body = styled.div`
width: 100%;
display: flex;
flex-direction: row;
background-color:#B8B8B8;
height:1000px;
`

export const LoginContainer = styled.div`
flex:1;
display: flex;
flex-direction: column;
`
export const ImageContainer = styled.div`
flex:1;
background-image: url(${banner});
background-size: cover;
/* background-repeat: repeat-y; */
background-position: center;
`

export const TitleConatiner = styled.div`
padding-top:10em;
display: flex;
flex-direction: column;
align-items: center;
`
export const Title = styled.span`
font-size:3em;
`
export const SubTitle = styled.span``
export const LoigInForm=styled.form`
padding-top:10em;
display: flex;
flex-direction: column;
align-items: center;
`


export const IdInput = styled.input.attrs({
placeholder:"아이디"
})`
font-size:2em;
width:400px;
height:70px;
border: 1px solid #D9D9D9;
border-radius: 10px;
margin-bottom: 1em;
`
export const PsInput = styled.input.attrs({
placeholder:"비밀번호"
})`
font-size:2em;
width:400px;
height:70px;
border: 1px solid #D9D9D9;
border-radius: 10px;
margin-bottom: 2em;
`
export const SubmitButton = styled.button`
font-size:2em;
width: 400px;
height: 55px;
border: 1px solid #5A5A5A;
box-sizing: border-box;
border-radius: 10px;
`

export const Footer = styled.div`
background: #B8E0EF;
width: 100%;
height:300px;
flex-direction: column;
`

export const IconContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
padding-top:1em;
padding-right:2em;
`
export const RowsContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
padding: 0 5em;
padding-top:1em;

`
export const Row= styled.div`
display: flex;
flex-direction: column;
align-items:center;
`

export const RowTitleText = styled.span`
font-size:2em;
padding-bottom:0.5em;
`

export const RowText = styled.span`
padding-bottom:1em;
`