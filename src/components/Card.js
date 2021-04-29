import React from 'react';
import styled from 'styled-components';

import * as colors from '../styles/colors';

const StyledCard = styled.div`
  border: 2px solid ${colors.gray};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
`;

export function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}
