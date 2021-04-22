import React from 'react';

import { readThisQuoteApi } from '../api';
export function Reader({ quote }) {
  const [readText, setReadText] = React.useState('');
  const handleRead = () => {
    const text = quote
      .split(' ')
      .map((txt) => txt + '+')
      .join('');

    console.log('txt', text);
    const url = readThisQuoteApi(decodeURI(text));
    setReadText(url);
  };
  console.log(readText);
  return (
    <>
      {readText && (
        <audio controls src={readText}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      )}
      <p onClick={handleRead} style={{ textDecoration: 'underline' }}>
        Read this quote
      </p>
    </>
  );
}
