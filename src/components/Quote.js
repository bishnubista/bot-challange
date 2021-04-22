import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomQuote } from '../actions/fetchRandomQuoteAction';

import { Card } from './Card';
import { Markup } from './Markup';
import { Button } from './Button';
import { PreviouslyQuotes } from './PreviouslyQuotes';
import { Reader } from './Reader';
export function Quote() {
  const dispatch = useDispatch();
  const [showPrevQuotes, setShowPrevQuotes] = React.useState(false);
  const { quote, author } = useSelector((state) => state.currentQuote);

  React.useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  const handleBtnClick = (event) => {
    // save current quote to previousQuotes
    const button = event.target;
    console.log('button ', button.textContent);
    const rated = button.textContent;
    const data = { quote, author, rated };
    dispatch({ type: 'ADD_TO_PREVIOUS_QUOTES', data });
    // fetch new quote
    dispatch(fetchRandomQuote());
  };

  const togglePreviousQuote = () => {
    // toggle previous quotes
    setShowPrevQuotes(!showPrevQuotes);
  };
  return (
    <Card>
      <div style={{ margin: '10px' }}>
        <h2>Quote # 1</h2>
        <div>{quote && <Markup content={quote} />}</div>
        <p>{author}</p>
        <Reader quote={quote} />
      </div>

      <div className='rated-button' style={{ display: 'flex' }}>
        <Button
          btnLabel='Lame'
          onClick={handleBtnClick}
          style={{ background: 'pink', padding: '5px', margin: '0 10px' }}
        />
        <Button
          btnLabel='Meh...'
          onClick={handleBtnClick}
          style={{ background: 'yellow', padding: '5px', margin: '0 10px' }}
        />
        <Button
          btnLabel='Great!'
          onClick={handleBtnClick}
          style={{ background: 'green', padding: '5px', margin: '0 10px' }}
        />
      </div>
      {showPrevQuotes && <PreviouslyQuotes />}
      <div className='previous-quote-button'>
        <Button
          btnLabel={`${showPrevQuotes ? 'Hide' : 'View'} Previous Quotes`}
          onClick={togglePreviousQuote}
          style={{ padding: '5px', margin: '10px' }}
        />
      </div>
    </Card>
  );
}
