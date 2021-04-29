import React from 'react';
import styled from 'styled-components';

export const StyledImage = styled.img((props) => props.styledProps);

export function Image({ imgSrc, alt, width, height, styledProps }) {
  const handleError = () => {
    // show default image
    // CSS default
  };

  return (
    <StyledImage
      src={imgSrc}
      alt={alt}
      onError={handleError}
      width={width}
      height={height}
      styledProps={styledProps}
    />
  );
}
