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
export const Date = styled.div`
  position: relative;
  top: 7%;
  left: -15%;
  font-weight: bold;
  font-size: 35px;
`;
export const Time = styled.div`
  position: relative;
  top: 7%;
  left: 16%;
  font-weight: bold;
  font-size: 35px;
`;
export const NameForm = styled.form`
  flex-direction: column;
  position: relative;
  top: 65%;
  left: -18%;
`;

export const NameInput = styled.input.attrs({
  placeholder: "이름",
  type: "text",
})`
  font-size: 1em;
  width: 300px;
  height: 60px;
  border: 1px solid #a9a9a9;
  border-radius: 10px;
  margin-bottom: 40px;
`;
export const PhoneInput = styled.input.attrs({
  placeholder: "전화번호",
  type: "text",
})`
  font-size: 1em;
  width: 300px;
  height: 60px;
  border: 1px solid #a9a9a9;
  border-radius: 10px;
  margin-bottom: 2em;
`;
export const TableContainer = styled.div`
  width: 700px;
  height: 500px;
  position: relative;
  top: 12%;
  left: -30%;
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
export const SubTitle = styled.span``;
export const TimeButton = styled.button`
  font-size: 2em;
  width: 400px;
  height: 55px;
  border: 1px solid #5a5a5a;
  box-sizing: border-box;
  border-radius: 10px;
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
