import React from 'react';
import styled from 'styled-components';
import CheckedRadio from '../../assets/img/checkedradio.svg';
import UncheckedRadio from '../../assets/img/uncheckedradio.svg';
import { useSpring, animated } from 'react-spring';

function RadioButton({ checked }) {
  // Radio button animation on checked
  const explodeOut = useSpring({
    opacity: checked ? 0 : 1,
    transform: checked ? 'scale(1.8, 1.8)' : 'scale(1, 1)',
    reset: checked ? false : true,
  });

  return (
    <>
      <BackgroundUncheckedRadio style={explodeOut} />
      {checked ? (
        <StyledCheckedRadio>
          <CheckedRadio />
        </StyledCheckedRadio>
      ) : (
        <StyledUncheckedRadio>
          <UncheckedRadio />
        </StyledUncheckedRadio>
      )}
    </>
  );
}

export default RadioButton;

const StyledCheckedRadio = styled.div`
  position: absolute;
  left: 0.8rem;
  z-index: 1;
  height: 24px;
  width: 24px;
`;

const StyledUncheckedRadio = styled.div`
  position: absolute;
  left: 0.8rem;
  z-index: 0;
  height: 24px;
  width: 24px;
`;

const BackgroundUncheckedRadio = styled(animated.div)`
  position: absolute;
  left: 0.8rem;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  border: 3px solid #32c8e4;
  z-index: 0;
`;
