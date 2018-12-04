import { GET_CATEGORIES, CATEGORY_LOADING } from '../actions/types';

const initialState = {
  categories: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_LOADING:
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
    // case GET_ITEM:
    //   return {
    //     ...state,
    //     item: action.payload,
    //     loading: false
    //   };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
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
