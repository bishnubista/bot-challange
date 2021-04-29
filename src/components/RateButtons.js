import React from 'react';
import styled from 'styled-components';

import * as colors from '../styles/colors';
import { Button } from './Button';

const StyledRateButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export function RateButtons({ handleBtnClick }) {
  return (
    <StyledRateButtons>
      <Button onClick={handleBtnClick} bg={colors.danger}>
        Lame
      </Button>
      <Button onClick={handleBtnClick} bg={colors.secondary}>
        Meh...
      </Button>
      <Button onClick={handleBtnClick} bg={colors.primary}>
        Great!
      </Button>
    </StyledRateButtons>
  );
}
