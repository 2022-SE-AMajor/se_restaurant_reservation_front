import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 1600px;
`;
export const CalendarContainer = styled.div`
  float: left;
  width: 600px;
  height: 400px;
  position: relative;
  top: 8%;
  left: 6%;
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
export const RightContainer = styled.div`
  position: relative;
  top: 5%;
  left: 12%;
`;
export const DayTitle = styled.div`
  position: relative;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
`;
export const DayReservContainer = styled.div`
  border: 3px solid #111111;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
  width: 700px;
  height: 600px;
`;
export const DayReserv = styled.div`
  border: 3px solid #aaaaaa;
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 5%;
  margin-left: 3%;
  padding: 10px;
  height: 100px;
  font-size: 25px;
  font-weight: bold;
  width: 650px;
  height: 100px;
`;
export const BottomContainer = styled.div`
  border: 3px solid #111111;
  box-sizing: border-box;
  border-radius: 5px;
  position: absolute;
  top: 120%;
  left: 5%;
  width: 1400px;
  height: 600px;
`;
export const MonthReservContainer = styled.div``;
export const MonthTitle = styled.div`
  position: relative;
  font-size: 35px;
  font-weight: bold;
  margin-left: 20px;
`;
export const MonthReserv = styled.div`
  border: 3px solid #aaaaaa;
  box-sizing: border-box;
  border-radius: 30px;
  margin-top: 3%;
  margin-left: 6%;
  float: left;
  width: 350px;
  height: 450px;
`;
export const MonthSubTitle = styled.div`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
`;
export const PreviousButton = styled.button`
  position: relative;
  top: 93%;
  left: 5%;
  width: 150px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background-color: #2f80ed;
  color: white;
  border-radius: 5px;
`;
