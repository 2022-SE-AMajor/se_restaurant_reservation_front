import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { FooterContainer, IconContainer, Row, RowsContainer, RowText, RowTitleText } from './HomePageComponent'

export default function Footer() {
  return (
    <FooterContainer>
    <IconContainer>
      <AiFillTwitterCircle
        style={{
          paddingLeft: 10,
        }}
        size={50}
      />
      <AiFillFacebook
        style={{
          paddingLeft: 10,
        }}
        size={50}
      />
      <AiFillInstagram
        style={{
          paddingLeft: 10,
        }}
        size={50}
      />
    </IconContainer>
    <RowsContainer>
      <Row>
        <RowTitleText>Product</RowTitleText>
        <RowText>Terms of Service</RowText>
        <RowText>Privacy Policy</RowText>
        <RowText>FAQ</RowText>
      </Row>
      <Row>
        <RowTitleText>Resources</RowTitleText>
        <RowText>Documentation</RowText>
        <RowText>Case Studies</RowText>
      </Row>
      <Row>
        <RowTitleText>Company</RowTitleText>
        <RowText>About Us</RowText>
        <RowText>Contact Us</RowText>
      </Row>
    </RowsContainer>
  </FooterContainer>
  )
}
