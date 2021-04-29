import React from 'react';
import { useDispatch } from 'react-redux';

import { UPDATE_TO_PREVIOUS_QUOTES, addToPreviousQuotes } from '../actions';

const getStateFrom = (key) => {
  const valueInLocalStorage = window.localStorage.getItem(key);
  if (valueInLocalStorage) {
    const parsed = JSON.parse(valueInLocalStorage);
    console.log('parsed ', parsed);
    return parsed;
  } else {
    window.localStorage.removeItem(key);
  }
  return [];
};

export function usePersistedState(key) {
  const dispatch = useDispatch();
  const [state, setState] = React.useState(null);

  const prevKeyRef = React.useRef(key);
  const prevStateRef = React.useRef([]);

  React.useEffect(() => {
    const value = getStateFrom(key);
    if (value.length) {
      prevStateRef.current = value;
      dispatch({ type: UPDATE_TO_PREVIOUS_QUOTES, data: value });
    }
  }, [key, dispatch]);

  React.useEffect(() => {
    try {
      const prevKey = prevKeyRef.current;
      if (prevKey !== key) {
        window.localStorage.removeItem(key);
      }
      prevKeyRef.current = key;

      if (prevStateRef.current && state) {
        const value = [...prevStateRef.current, state];
        window.localStorage.setItem(key, JSON.stringify(value));
        dispatch(addToPreviousQuotes(state));
      }
    } catch (error) {
      console.error('Error', error);
    }
  }, [state, key, dispatch]);

  return [state, setState];
}
