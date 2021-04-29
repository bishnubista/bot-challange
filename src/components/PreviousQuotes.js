import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Markup } from './Markup';
import { Card } from './Card';
import { RateButtons } from './RateButtons';
import { Button } from './Button';
import { UPDATE_TO_PREVIOUS_QUOTES } from '../actions';
import { StyledAuthor, StyledQuote } from './Quote';

export function PreviousQuotes() {
  const dispatch = useDispatch();
  const previousQuotes = useSelector((state) => state.previousQuotes);
  const [toggleId, setToggleId] = React.useState(null);

  const handleBtnClick = (event, id) => {
    const button = event.target;
    const rated = button.textContent;
    const data = previousQuotes.filter((quote) => {
      if (quote.id === id) {
        quote.rated = rated;
      }
      return quote;
    });
    dispatch({ type: UPDATE_TO_PREVIOUS_QUOTES, data });
    setToggleId(null);
  };

  const handleUpdate = (id) => {
    setToggleId(id);
  };

  const hasPreviousQuotes =
    Array.isArray(previousQuotes) && previousQuotes.length > 0;

  return hasPreviousQuotes ? (
    <div style={{ width: '90%', margin: '10px auto' }}>
      <h3>Previous Quotes</h3>
      {previousQuotes.map(({ id, quote, author, rated } = {}) => (
        <Card key={id}>
          <StyledQuote>{quote && <Markup content={quote} />}</StyledQuote>
          <StyledAuthor>{author && <Markup content={author} />}</StyledAuthor>
          <p>Your rating: {rated}</p>
          {toggleId === id ? (
            <RateButtons handleBtnClick={(e) => handleBtnClick(e, id)} />
          ) : (
            <Button onClick={() => handleUpdate(id)}>Update Rating</Button>
          )}
        </Card>
      ))}
    </div>
  ) : null;
}
