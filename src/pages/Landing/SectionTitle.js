import React from 'react';
import styled from 'styled-components';

function SectionTitle({ children, white }) {
  return <Title white={white}>{children}</Title>;
}

export default SectionTitle;

const Title = styled.h2`
  text-align: center;
  color: ${props => (props.white ? '#ffffffb5' : 'null')};
`;
