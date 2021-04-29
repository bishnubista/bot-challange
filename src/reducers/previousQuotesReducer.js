import { ADD_TO_PREVIOUS_QUOTES, UPDATE_TO_PREVIOUS_QUOTES } from '../actions';

const initialState = [];
export const previousQuotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PREVIOUS_QUOTES: {
      return [...state, ...action.data];
    }
    case UPDATE_TO_PREVIOUS_QUOTES:
      return action.data;
    default:
      return state;
  }
};
