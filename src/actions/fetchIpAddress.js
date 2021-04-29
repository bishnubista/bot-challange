import { getIpAddress } from '../api';
import { FETCH_IP_SUCCESS } from '../actions/types';

export const fetchIpAddress = () => async (dispatch) => {
  try {
    const response = await getIpAddress();
    if (!response.ok) {
      throw Error('Error in fetching IP address');
    }
    const ip = await response.json();
    dispatch({ type: FETCH_IP_SUCCESS, data: ip });
  } catch (error) {
    console.error(error);
  }
};
