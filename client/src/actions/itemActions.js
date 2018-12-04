import axios from 'axios';

import {
  GET_ERRORS,
  ADD_ITEM,
  CLEAR_ERRORS,
  GET_ITEM,
  GET_ITEMS,
  ITEM_LOADING
  // DELETE_POST
} from './types';

// Add Item
export const addItem = itemData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/api/items', itemData)
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get All Items
export const getItems = () => dispatch => {
  console.log('action get All Items');
  dispatch(setItemLoading());
  axios
    .get('/api/items')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ITEMS,
        payload: null
      })
    );
};

// Get Item
export const getItem = id => dispatch => {
  console.log('action get Items');
  dispatch(setItemLoading());
  axios
    .get(`/api/items/${id}`)
    .then(res =>
      dispatch({
        type: GET_ITEM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ITEM,
        payload: null
      })
    );
};

// // Get Post
// export const getPost = id => dispatch => {
//   dispatch(setPostLoading());
//   axios
//     .get(`/api/posts/${id}`)
//     .then(res =>
//       dispatch({
//         type: GET_POST,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_POST,
//         payload: null
//       })
//     );
// };

// // Delete Post
// export const deletePost = id => dispatch => {
//   axios
//     .delete(`/api/posts/${id}`)
//     .then(res =>
//       dispatch({
//         type: DELETE_POST,
//         payload: id
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Set loading state
export const setItemLoading = () => {
  return {
    type: ITEM_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
