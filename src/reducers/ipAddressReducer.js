import { FETCH_IP_SUCCESS } from '../actions/types';

const initialState = {
  lat: '',
  lon: '',
  usersIp: '',
};

const getIpData = (ip) => {
  const { lat, lon, query } = ip;
  const usersIp = query;
  return { lat, lon, usersIp };
};

export const ipAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IP_SUCCESS: {
      const { lat, lon, usersIp } = getIpData(action.data);
      return { ...state, lat, lon, usersIp };
    }
    default:
      return state;
  }
};
