import React from 'react';
import styled from 'styled-components';

import * as mq from '../styles/mediaQueries';

const StyledButton = styled.button`
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  padding: 7px 10px;
  background: ${({ bg }) => (bg ? bg : 'transparent')};
  @media ${mq.medium}, ${mq.large} {
    min-width: 14rem;
  }
`;

export function Button({ children, bg, onClick }) {
  return (
    <StyledButton onClick={onClick} bg={bg}>
      {children}
    </StyledButton>
  );
}
