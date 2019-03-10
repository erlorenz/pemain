import React from 'react';
import Logo from './assets/pressexpresslogo.svg';
import PhoneSize from './assets/suitsphonesize.jpeg';
import VegasSign from './assets/vegassign.png';
import styled from 'styled-components';
// import { observer } from 'mobx-react';

function App() {
  return (
    <>
      <H1>hello</H1>
      <Logo />
      <img src={PhoneSize} />
      <img src={VegasSign} />
    </>
  );
}

export default App;

const H1 = styled.h1`
  color: blue;
`;
