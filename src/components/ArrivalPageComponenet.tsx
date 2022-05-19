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
export const ButtonContainer = styled.div`
  width: 700px;
  height: 400px;
  position: absolute;
  top: 90%;
  left: 2%;
`;
export const SubmitButton = styled.button`
  font-size: 20px;
  width: 120px;
  height: 50px;
  border: 2px solid #5a5a5a;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: 15px;
  margin-top: 15px;
  background-color: ${(props) => props.color};
  box-shadow: 3px 3px gray;
`;
export const Date = styled.div`
  position: relative;
  top: 7%;
  left: 6%;
  font-weight: bold;
  font-size: 35px;
`;
export const Time = styled.div`
  position: relative;
  top: 7%;
  left: 36%;
  font-weight: bold;
  font-size: 35px;
`;
export const TableContainer = styled.div`
  width: 700px;
  height: 500px;
  position: relative;
  top: 12%;
  left: -10%;
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
export const SelectContainer = styled.div`
  width: 680px;
  height: 45px;
  background-color: #a3a3a3;
  margin-top: 40px;
  font-weight: bold;
  font-size: 25px;
  padding: 10px;
`;
export const Select = styled.select`
  position: relative;
  left: 50%;
  width: 180px;
  height: 40px;
  font-size: 22px;
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
export const NextButton = styled.button`
  position: relative;
  top: 15%;
  left: 80%;
  width: 120px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background-color: #2f80ed;
  color: white;
  border-radius: 5px;
`;
