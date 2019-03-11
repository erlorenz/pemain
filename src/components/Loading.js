import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Loading = ({
  className,
  type = 'Puff',
  color = '#00BFFF',
  height,
  width,
}) => (
  <Div className={className} height={height} width={width}>
    <Loader type={type} color={color} height="100" width="100" />
  </Div>
);

export default Loading;

const Div = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
`;
