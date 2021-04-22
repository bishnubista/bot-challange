import React from 'react';

export function Image({ imgSrc, alt, style }) {
  const handleError = () => {
    // show default image
    // CSS default
  };
  return (
    <div>
      <img src={imgSrc} alt={alt} onError={handleError} style={style} />
    </div>
  );
}
