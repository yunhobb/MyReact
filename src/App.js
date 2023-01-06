import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`
body{
  padding:0;
  margin:0;
}`;

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <Globalstyle />
        <Container>
          <Button> Hello </Button>
          <Button danger> Hello</Button>
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active, 
  &:focus{
    outline. none;
  };
  background-color: ${props => (props.danger ? '#e74c4c' : '#2ecc71')}
`;

export default App;

//test1
