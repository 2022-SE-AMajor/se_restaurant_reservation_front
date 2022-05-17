import React from "react";
import { Routes, Route } from "react-router-dom";

import styled from "styled-components";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import CanclePage from "./pages/Canclepage";
import ModifyListPage from "./pages/ModifyListpage";
import ModifyListPage_date from "./pages/ModifyListpage_date";
import ModifyListPage_table from "./pages/ModifyListpage_table";
import OnsiteReservPage from "./pages/OnsiteReservpage";
import ReservPage_date from "./pages/ReservPage_date";
import ReservPage_table from "./pages/ReservPage_table";
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
        <Route path="/cancle" element={<CanclePage />} />
        <Route path="/modifyList" element={<ModifyListPage />} />
        <Route path="/modifyList_date" element={<ModifyListPage_date />} />
        <Route path="/modifyList_table" element={<ModifyListPage_table />} />
        <Route path="/onsiteReserv" element={<OnsiteReservPage />} />
        <Route path="/reservPage_date" element={<ReservPage_date />} />
        <Route path="/reservPage_table/" element={<ReservPage_table />} />
      </Routes>
      <Footer />
    </Container>
  );
}
