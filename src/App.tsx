import React from 'react';
import styled from 'styled-components'


const Container = styled.div({
  margin: '0 auto',
  width: '90%',
});

const Header = styled.header`
`

function App() {
  return (
    <Container>
      <Header>
          헤더
      </Header>
    </Container>
      
  );
}

export default App;
