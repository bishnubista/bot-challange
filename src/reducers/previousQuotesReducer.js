import { ADD_TO_PREVIOUS_QUOTES } from '../actions/types';

const initialState = [];
export const previousQuotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PREVIOUS_QUOTES: {
      return [...state, action.data];
    }

    default:
      return state;
  }
};
