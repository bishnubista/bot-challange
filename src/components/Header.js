import React from 'react';
import styled from 'styled-components';

import * as colors from '../styles/colors';

const StyledHeader = styled.div`
  position: ${({ position }) => position || 'static'};
  background: ${({ bg }) => bg};
  padding: 1rem;
  font-size: 1.25rem;
  color: ${colors.light};
`;

export function Header({ children }) {
  return <StyledHeader bg={colors.dark}>{children}</StyledHeader>;
}
