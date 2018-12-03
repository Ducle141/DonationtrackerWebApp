import { GET_ITEM, GET_ITEMS, ITEM_LOADING } from '../actions/types';

const initialState = {
  item: [],
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ITEM_LOADING:
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
    case GET_ITEM:
      return {
        ...state,
        item: action.payload,
        loading: false
      };
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
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
