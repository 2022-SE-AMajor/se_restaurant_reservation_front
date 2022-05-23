import React from "react";
import { Routes, Route } from "react-router-dom";

import styled from "styled-components";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import ReserveLook_date from "./pages/ReserveLook_date";
// import ReserveLook_table from "./pages/ReserveLook_Table";
// import CanclePage from "./pages/Canclepage";
// import ModifyListPage from "./pages/ModifyListpage";
// import ModifyListPage_date from "./pages/ModifyListPage_date";
// import ModifyListPage_table from "./pages/ModifyListPage_table";
// import OnsiteReservPage from "./pages/OnsiteReservpage";
// import ReservPage_date from "./pages/ReservPage_date";
// import ReservPage_table from "./pages/ReservPage_table";
import StatisticPage from "./pages/StatisticPage";
// import ArrivalPage from "./pages/ArrivalPage";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { InitialStateProp } from "./slice";

const Container = styled.div``;

export default function App() {
  const { isLogedIn } = useSelector((state: InitialStateProp) => ({
    isLogedIn: state.isLogedIn,
  }));

  return (
    <Container>
      <Header />
      {isLogedIn ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reserveLook_date" element={<ReserveLook_date />} />
          <Route path="/statisticPage" element={<StatisticPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<LogInPage />} />
        </Routes>
      )}
      <Footer />
    </Container>
  );
}
