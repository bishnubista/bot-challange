import React from 'react';
import { useSelector } from 'react-redux';
import { Markup } from './Markup';
import { Card } from './Card';

export function PreviouslyQuotes() {
  const previousQuotes = useSelector((state) => state.previousQuotes);

  return (
    Array.isArray(previousQuotes) &&
    previousQuotes.map(({ id, quote, author, rated }) => (
      <Card key={id}>
        <div>{quote && <Markup content={quote} />}</div>
        <p>{author}</p>
        <p>Your rating: {rated}</p>
      </Card>
    ))
  );
}
