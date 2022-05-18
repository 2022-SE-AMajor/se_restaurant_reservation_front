import React from "react";
import { Routes, Route } from "react-router-dom";

import styled from "styled-components";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import ReserveLook_date from "./pages/ReserveLook_date";
import ReserveLook_table from "./pages/ReserveLook_Table";
import CanclePage from "./pages/Canclepage";
import ModifyListPage from "./pages/ModifyListpage";
import ModifyListPage_date from "./pages/ModifyListPage_date";
import ModifyListPage_table from "./pages/ModifyListPage_table";
import OnsiteReservPage from "./pages/OnsiteReservpage";
import ReservPage_date from "./pages/ReservPage_date";
import ReservPage_table from "./pages/ReservPage_table";
import StatisticPage from "./pages/StatisticPage";
import ArrivalPage from "./pages/ArrivalPage";
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
      <Routes>
        {isLogedIn ? (
          <Route path="/" element={<HomePage />} />
        ) : (
          <Route path="/" element={<LogInPage />} />
        )}
        <Route path="/reserveLook_date" element={<ReserveLook_date />} />
        <Route path="/reserveLook_table" element={<ReserveLook_table />} />
        <Route path="/cancle" element={<CanclePage />} />
        <Route path="/modifyList" element={<ModifyListPage />} />
        <Route path="/modifyList_date" element={<ModifyListPage_date />} />
        <Route path="/modifyList_table" element={<ModifyListPage_table />} />
        <Route path="/onsiteReserv" element={<OnsiteReservPage />} />
        <Route path="/reservPage_date" element={<ReservPage_date />} />
        <Route path="/reservPage_table/" element={<ReservPage_table />} />
        <Route path="/statisticPage" element={<StatisticPage />} />
        <Route path="/arrivalPage" element={<ArrivalPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}
