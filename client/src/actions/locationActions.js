import axios from 'axios';

import { GET_LOCATIONS, LOCATION_LOADING } from './types';

// Get all locations
export const getLocations = () => dispatch => {
  dispatch(setLocationLoading());
  console.log('getting locations');
  axios
    .get('/api/locations/all')
    // .get('/location')
    .then(res =>
      dispatch({
        type: GET_LOCATIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_LOCATIONS,
        payload: null
      })
    );
};

// // Get current profile
// export const getCurrentProfile = () => dispatch => {
//   dispatch(setProfileLoading());
//   axios
//     .get('/api/profile')
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: {}
//       })
//     );
// };

// // Get profile by handle
// export const getProfileByHandle = handle => dispatch => {
//   dispatch(setProfileLoading());
//   axios
//     .get(`/api/profile/handle/${handle}`)
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: null
//       })
//     );
// };

// // Create Profile
// export const createProfile = (profileData, history) => dispatch => {
//   axios
//     .post('/api/profile', profileData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// // Delete account & profile
// export const deleteAccount = () => dispatch => {
//   if (window.confirm('Are you sure? This can NOT be undone!')) {
//     axios
//       .delete('/api/profile')
//       .then(res =>
//         dispatch({
//           type: SET_CURRENT_USER,
//           payload: {}
//         })
//       )
//       .catch(err =>
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       );
//   }
// };

// // Profile loading
// export const setProfileLoading = () => {
//   return {
//     type: PROFILE_LOADING
//   };
// };

// // Clear profile
// export const clearCurrentProfile = () => {
//   return {
//     type: CLEAR_CURRENT_PROFILE
//   };
// };

// Location loading
export const setLocationLoading = () => {
  return {
    type: LOCATION_LOADING
  };
};
