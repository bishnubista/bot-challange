import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { fetchRandomQuote, addToPreviousQuotes } from '../actions';
import { Card } from './Card';
import { Markup } from './Markup';
import { Button } from './Button';
import { PreviousQuotes } from './PreviousQuotes';
import Reader from './Reader';
import { RateButtons } from './RateButtons';
import { usePersistedState } from '../hooks/usePersistedState';
// const ReaderLazy = React.lazy(() => import('./Reader'));

const StyledQuoteWrapper = styled.div`
  width: 85vw;
  margin: 10px auto;
`;

const PreviousQuoteBtnWrapper = styled.div`
  margin: 10px;
`;

const StyledTitle = styled.h3``;

export const StyledQuote = styled.div`
  line-height: 1.5;
`;

export const StyledAuthor = styled(StyledQuote)`
  font-style: italic;
`;

export function Quote() {
  const dispatch = useDispatch();
  const [showPrevQuotes, setShowPrevQuotes] = React.useState(false);
  const { id, quote, author } = useSelector(({ currentQuote }) => currentQuote);
  const previousQuotes = useSelector((state) => state.previousQuotes);
  const quotesLength = previousQuotes.length;

  const [localState, setLocalState] = usePersistedState('previous');

  React.useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  // React.useEffect(() => {
  //   if (!!localState) {
  //     dispatch(addToPreviousQuotes(localState));
  //   }
  // }, [dispatch, localState]);

  const handleBtnClick = (event) => {
    // save current quote to previousQuotes
    const button = event.target;
    const rated = button.textContent;
    const data = { id, quote, author, rated };

    setLocalState('previous', data);
    // fetch new quote
    dispatch(fetchRandomQuote());
  };

  const togglePreviousQuote = () => {
    // toggle previous quotes
    if (quotesLength) {
      setShowPrevQuotes(!showPrevQuotes);
    }
  };
  return (
    <>
      <StyledQuoteWrapper>
        <Card>
          <StyledTitle>Quote # {quotesLength + 1}</StyledTitle>
          <StyledQuote>{quote && <Markup content={quote} />}</StyledQuote>
          <StyledAuthor>{author && <Markup content={author} />}</StyledAuthor>
          {/* <React.Suspense fallback={<div>Loading Reader...</div>}>
              {quote ? <ReaderLazy quote={quote} /> : null}
            </React.Suspense> */}
          {quote ? <Reader quote={quote} /> : null}
          <RateButtons handleBtnClick={handleBtnClick} />
          <PreviousQuoteBtnWrapper>
            <Button onClick={togglePreviousQuote}>
              {`${showPrevQuotes ? 'Hide' : 'View'} Previous Quotes`}
            </Button>
          </PreviousQuoteBtnWrapper>
        </Card>
      </StyledQuoteWrapper>
      {showPrevQuotes && <PreviousQuotes />}
    </>
  );
}

export default React.memo(Quote);
