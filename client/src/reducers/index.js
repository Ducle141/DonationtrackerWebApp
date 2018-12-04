import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';

import locationReducer from './locationReducer';
import itemReducer from './itemReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  location: locationReducer,
  item: itemReducer,
  category: categoryReducer
});
