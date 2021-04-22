import { getQuotes } from '../api';
import { FETCH_RANDOM_QUOTE_SUCCESS } from '../actions/types';

const getRandomNumber = () => Math.random();

export const fetchRandomQuote = () => async (dispatch) => {
  try {
    const randomNumber = getRandomNumber();
    const response = await getQuotes(randomNumber);
    if (!response.ok) {
      throw Error('Error in fetching quotes');
    }
    const quote = await response.json();
    dispatch({ type: FETCH_RANDOM_QUOTE_SUCCESS, data: quote });
  } catch (error) {
    // add logger funtion
    // record splunk
    console.error(error);
  }
};
