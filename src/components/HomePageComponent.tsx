import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Body = styled.div`
  height: 1400px;
`;
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
  left: 13%;
  font-size: 3em;
  font-weight: bold;
`;
export const ButtonContainer = styled.form`
  margin-top: 5%;
  margin-left: 12%;
`;

export const ImageCheck = styled.img.attrs({
  src: require("./images/예약조회.png"),
})`
  width: 200px;
  height: 200px;
`;
export const ImageCancle = styled.img.attrs({
  src: require("./images/예약취소.png"),
})`
  width: 200px;
  height: 200px;
`;
export const ImageModify = styled.img.attrs({
  src: require("./images/예약정보변경.png"),
})`
  width: 200px;
  height: 200px;
`;
export const ImageReserv = styled.img.attrs({
  src: require("./images/사전예약.png"),
})`
  width: 200px;
  height: 200px;
`;
export const Imagearrival = styled.img.attrs({
  src: require("./images/현장도착.png"),
})`
  width: 200px;
  height: 200px;
  margin-top: 5%;
`;
export const ImageStatistic = styled.img.attrs({
  src: require("./images/통계.png"),
})`
  width: 200px;
  height: 200px;
`;
export const ImageOnsite = styled.img.attrs({
  src: require("./images/현장예약.png"),
})`
  width: 200px;
  height: 200px;
  margin-left: 50px;
`;
export const SubTitle = styled.span`
  text-decoration: none;
  color: blue;
  font-size: 20px;
  position: relative;
  left: -150px;
  top: 50px;
  text-align: center;
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
