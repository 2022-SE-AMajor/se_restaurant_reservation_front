import React from 'react';
import { Routes, Route } from 'react-router-dom';

import styled from 'styled-components'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';


const Container = styled.div`
  
`;



function App() {
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<LogInPage/>} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
    </Container>
      
  );
}

export default App;
