import React from 'react';
import { useDispatch } from 'react-redux';

import { addToPreviousQuotes } from '../actions/addToPreviousQuotes';
const getStateFrom = (key) => {
  const val = window.localStorage.getItem(key) || null;
  if (val) {
    return JSON.parse(val);
  }
  return val;
};

export function usePersistedState(key) {
  const dispatch = useDispatch();
  const [state, setState] = React.useState(() => getStateFrom(key));
  const setStateIn = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));

    setState([value]);
  };

  React.useEffect(() => {
    try {
      if (state) {
        dispatch(addToPreviousQuotes([...state]));
      }
    } catch (error) {
      console.error('Error', error);
    }
  }, [state, dispatch]);

  return [state, setStateIn];
}
