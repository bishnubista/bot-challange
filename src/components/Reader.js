import React from 'react';
import styled from 'styled-components';

import { readThisQuoteApi } from '../api';
import VolumeUp from '../assets/volume-icon';

const extractContent = (innerText) => {
  const span = document.createElement('span');
  span.innerHTML = innerText;
  return span.textContent || span.innerText;
};

const StyledReader = styled.a`
  display: flex;
  &:hover,
  &:active {
    color: red;
  }
`;

const StyledReaderText = styled.p`
  text-decoration: underline;
  margin: 3px;
  margin-top: 3px;
  padding-bottom: 10px;
`;

export function Reader({ quote }) {
  const audioRef = React.useRef(null);
  const [readText, setReadText] = React.useState('');

  const handleHover = React.useCallback(() => {
    const inner = extractContent(quote);

    const urlWithInnerText = inner
      .replace(/(\r\n|\n|\r)/gm, '')
      .split(' ')
      .filter(Boolean)
      .map((str, i) => (i > 0 ? '+' + str : str))
      .join('');

    const url = readThisQuoteApi(urlWithInnerText);
    setReadText(url);
  }, [quote]);

  const handleRead = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      {readText && (
        <audio src={readText} ref={audioRef}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      )}

      <StyledReader
        onClick={handleRead}
        onMouseEnter={handleHover}
        onFocus={handleHover}
      >
        <VolumeUp />
        <StyledReaderText>Read this quote</StyledReaderText>
      </StyledReader>
    </>
  );
}
export default React.memo(Reader);
