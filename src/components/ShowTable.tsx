import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 1000px;
`;

export const ImageContainer = styled.img.attrs({
  src: require("./images/banner2.png"),
})`
  width: 700px;
  height: 400px;
  position: relative;
  top: 15%;
  left: 2%;
`;
export const TableContainer = styled.form`
  width: 700px;
  height: 510px;
  position: relative;
  top: 12%;
  left: 5%;
  background-color: #e3e3e3;
`;
export const Table = styled.button`
  width: 120px;
  height: 80px;
  margin: 3%;
  margin-left: 4%;
  background-color: #2ec160;
  box-shadow: 3px 3px gray;
  border-radius: 10px;
`;
export const Tablee = styled.button`
  width: 120px;
  height: 80px;
  margin: 3%;
  margin-left: 4%;
  background-color: #d3d3d3;
  box-shadow: 3px 3px gray;
  border-radius: 10px;
`;
export const TimeButtonContainer = styled.form`
  width: 1000px;
  height: 300px;
  position: relative;
  top: 70%;
  left: -40%;
`;
export const TimeButton = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 7px;
  margin: 2px;
`;
export const TitleConatiner = styled.div`
  padding-top: 10em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.span`
  font-size: 3em;
`;
export const SubTitle = styled.span``;
export const LoigInForm = styled.form`
  padding-top: 10em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubmitButton = styled.button`
  font-size: 2em;
  width: 400px;
  height: 55px;
  border: 1px solid #5a5a5a;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const Footer = styled.div`
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
