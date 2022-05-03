import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Body = styled.div``;
export const ImageContainer = styled.img.attrs({
  src: require("./images/banner2.png"),
})`
  width: 80%;
  margin-left: 10%;
`;
export const TitleConatiner = styled.div`
  display: flex;
  flex-direction: column;
  color: #002d69;
`;
export const Title = styled.span`
  position: relative;
  top: 20px;
  left: 15%;
  font-size: 3em;
`;
export const ButtonContainer = styled.form`
  align-item: center;
  margin-top: 5%;
  margin-left: 15%;
`;

export const ImageCancle = styled.img.attrs({
  src: require("./images/예약취소.png"),
})`
  width: 250px;
  height: 300px;
  position: relative;
  margin-left: 30px;
`;
export const ImageModify = styled.img.attrs({
  src: require("./images/예약정보변경.png"),
})`
  width: 250px;
  height: 300px;
  position: relative;
  margin-left: 30px;
`;
export const ImageReserv = styled.img.attrs({
  src: require("./images/사전예약.png"),
})`
  width: 250px;
  height: 300px;
  position: relative;
  margin-left: 30px;
`;
export const SubTitle = styled.span`
  color: blue;
  font-size: 20px;
  position: relative;
  left: -150px;
  text-decoration-line: none;
`;
export const FooterContainer = styled.div`
  background: #b8e0ef;
  width: 100%;
  height: 300px;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 1em;
  padding-right: 2em;
`;
export const RowsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 5em;
  padding-top: 1em;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RowTitleText = styled.span`
  font-size: 2em;
  padding-bottom: 0.5em;
`;

export const RowText = styled.span`
  padding-bottom: 1em;
`;
