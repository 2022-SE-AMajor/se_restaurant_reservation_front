import React from "react";
import { Routes, Route } from "react-router-dom";

import styled from "styled-components";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import CanclePage from "./pages/Canclepage";
import ModifyListPage from "./pages/ModifyListpage";
import OnsiteReservPage from "./pages/OnsiteReservpage";
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
          <Route path="/home" element={<HomePage />} />
        ) : (
          <Route path="/" element={<LogInPage />} />
        )}
        <Route path="/cancle" element={<CanclePage />} />
        <Route path="/modifyList" element={<ModifyListPage />} />
        <Route path="/onsiteReserv" element={<OnsiteReservPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}
