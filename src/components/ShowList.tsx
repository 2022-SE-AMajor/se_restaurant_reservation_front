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
export const TitleConatiner = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.span`
  margin-left: 10%;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
`;
export const List = styled.form`
  position: relative;
  left: 5%;
  padding: 0.5em;
  margin: 0.5em;
  border: 0.1em solid black;
  width: 1300px;
  height: 350px;
  font-weight: bold;
  font-size: 20px;
`;
export const ImageContainer = styled.div`
  float: left;
  background-color: #c4c4c4;
  width: 200px;
  height: 260px;
  margin: 2%;
`;
export const InputCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  left: -24%;
  top: 40%;
`;
export const ListButton = styled.button`
  position: relative;
  left: 65%;
  top: 35%;
  background-color: #9c948a;
  color: white;
  width: 151px;
  height: 48px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
export const ListTitle = styled.span`
  position: relative;
  top: 5%;
  margin-top: 10px;
  font-weight: bold;
  color: gray;
`;
export const ListDescription = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: 7%;
  color: gray;
`;
export const CancleButton = styled.button`
  position: relative;
  top: 5%;
  left: 95%;
  width: 120px;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  background-color: #2f80ed;
  color: white;
  border-radius: 5px;
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
