import { GET_LOCATIONS, LOCATION_LOADING } from '../actions/types';

const initialState = {
  location: null,
  locations: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOCATION_LOADING:
      return {
        ...state,
        loading: true
      };
    // case GET_PROFILE:
    //   return {
    //     ...state,
    //     profile: action.payload,
    //     loading: false
    //   };
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
        loading: false
      };
    // case CLEAR_CURRENT_PROFILE:
    //   return {
    //     ...state,
    //     profile: null
    //   };
    default:
      return state;
  }
}
