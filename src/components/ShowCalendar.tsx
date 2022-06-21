import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* height: 1000px; */
  @media (min-width: 769px) {
     flex-direction: row;

    }


  @media  (max-width: 768px) {
     /* 모바일에 사용될 스트일 시트를 여기에 작성합니다. */ 
     flex-direction: column;

    }

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
export const CalendarContainer = styled.div`
  flex:1;
  /* width: 700px;
  height: 800px;
  position: relative;
  top: 8%;
  left: 4%; */
  .react-calendar {
    width: 700px;
    height: 450px;
    background: white;
    border: 0px;
    line-height: 3em;
    font-size: 20px;
  }
  .react-calendar__navigation button {
    border: 0px;
  }
  .react-calendar button {
    width: 5%;
    font-size: 15px;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #000000;
    border: 0px;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.9 em;
    color: gray;
  }
  .react-calendar__tile {
    max-width: 100%;
    padding: 10px 6.6667px;
    background: none;
    text-align: center;
    line-height: 30px;
    border: 0px;
  }
  .react-calendar__tile--now {
    background: #ffffff;
    color: #006edc;
    font-weight: bold;
  }
  .react-calendar__tile:enabled:hover {
    background: #ffffff;
  }
  .react-calendar__tile--now:enabled:hover {
    background: #ffffff;
  }
  .react-calendar__tile--now:enabled:focus {
    background: #ffffff;
  }
  .react-calendar__tile--active {
    background: #83bffb;
    color: #000000;
    border-radius: 30px;
  }
  .react-calendar__tile--active:enabled:focus {
    background: #83bffb;
    border-radius: 30px;
  }
`;
export const ButtonContainer = styled.div``;
export const TimeButton = styled.button`
  font-size: 20px;
  width: 120px;
  height: 50px;
  border: 2px solid #5a5a5a;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: 15px;
  margin-top: 15px;
  background-color: ${(props) => props.value === "checked" ? 'red' : 'lightgray'};
  box-shadow: 3px 3px gray;
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
