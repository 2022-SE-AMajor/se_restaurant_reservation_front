import styled from "styled-components";

export const Container = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  /* height: 1000px; */
`;

export const Header = styled.div`
  display: flex;
  /* justify-content: ; */
  gap:10%;
`

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
  font-weight: bold;
  font-size: 35px;
`;
export const Time = styled.div`

  font-weight: bold;
  font-size: 35px;
`;
export const TableContainer = styled.div`
  /* width: 700px; */
  /* height: 500px; */
  /* position: relative;
  top: 12%;
  left: -9%; */
  Grid-column-start : 1 3;
  Grid-column-end : 1 4;
  background-color: #e3e3e3;
`;
export const Table = styled.button`
  width: 120px;
  height: 80px;
  margin: 3%;
  margin-left: 4%;
  font-size:20px;
  font-weight: 600;
  border: ${(props) => props.value === "checked" ? "10px solid red" : "1px solid black"};
  background-color: ${(props) => {
    if (props.name === "0") {
      return '#2ec160'
    } else if (props.name === "1") {
      return 'red'
    } else if (props.name === "2") {
      return 'purple'
    }
  }};
  /* background-color: #2ec160; */
  box-shadow: 3px 3px gray;
  border-radius: 10px;
`;
export const SelectContainer = styled.div`
  /* width: 680px; */
  /* height: 45px; */
  background-color: #e3e3e3;
  margin-top: 40px;
  font-weight: bold;
  font-size: 25px;
  padding: 10px;
  display:flex;
  flex-direction:column;
  gap:10px;
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
