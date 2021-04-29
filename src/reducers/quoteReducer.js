import { FETCH_RANDOM_QUOTE_SUCCESS } from '../actions/types';

const getQuote = (quoteArr) => {
  const { id, content, title } = quoteArr[0] || {};
  const quote = content?.rendered || '';
  const author = title?.rendered || '';

  return { id, quote, author };
};

const initialState = {
  id: '',
  quote: '',
  author: '',
};

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_QUOTE_SUCCESS: {
      const firstQuoteFromArray = getQuote(action.data);
      const { id, quote, author } = firstQuoteFromArray;
      return { ...state, id, quote, author };
    }

    default:
      return state;
  }
};
