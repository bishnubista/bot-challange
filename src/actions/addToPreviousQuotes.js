import { ADD_TO_PREVIOUS_QUOTES } from './types';

export const addToPreviousQuotes = (data) => ({
  type: ADD_TO_PREVIOUS_QUOTES,
  data,
});
