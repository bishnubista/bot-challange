import { combineReducers } from 'redux';

import { quoteReducer } from './quoteReducer';
import { previousQuotesReducer } from './previousQuotesReducer';
import { ipAddressReducer } from './ipAddressReducer';

export default combineReducers({
  currentQuote: quoteReducer,
  previousQuotes: previousQuotesReducer,
  idAddress: ipAddressReducer,
});
