
export const NEARBY_REQUEST = 'NEARBY_REQUEST';
export const NEARBY_SUCCESS = 'NEARBY_SUCCESS';
export const NEARBY_FAILURE = 'NEARBY_FAILURE';

export const nearbyRequest = () => ({
  type: NEARBY_REQUEST,
});

export const nearbySuccess = (results) => ({
  type: NEARBY_SUCCESS,
  payload: results,
});

export const nearbyFailure = (error) => ({
  type: NEARBY_FAILURE,
  payload: error,
});

export const fetchNearbyEvents = (ipAddress) => async (dispatch) => {
    dispatch(nearbyRequest());
    try {
      const response = await fetch(`http://localhost:3000/api/v1/nearby?ip=${ipAddress}`);
      if (!response.ok) throw new Error(`Request failed with status: ${response.status}`);
      
      const events = await response.json();
      dispatch(nearbySuccess(events));
    } catch (error) {
      dispatch(nearbyFailure(error.message));
    }
};



// export const fetchNearbyEvents = (latitude, longitude) => async (dispatch) => {
//     dispatch(nearbyRequest());
//     try {
//       const response = await fetch(`http://localhost:3000/api/v1/nearby?lat=${latitude}&lon=${longitude}`);
//       const events = await response.json();
//       dispatch(nearbySuccess(events));
//     } catch (error) {
//       dispatch(nearbyFailure(error.message));
//     }
//   };
  
// export const fetchNearbyEvents = (latitude, longitude) => async (dispatch) => {
//     dispatch(nearbyRequest());
//     try {
//       const response = await fetch(`http://localhost:3000/api/v1/nearby?lat=${latitude}&lon=${longitude}`);
//       if (!response.ok) throw new Error(`Request failed with status: ${response.status}`);
      
//       const events = await response.json();
//       dispatch(nearbySuccess(events));
//     } catch (error) {
//       dispatch(nearbyFailure(error.message));
//     }
//   };

  


// export const fetchNearbyEvents = () => async (dispatch) => {
//     dispatch(nearbyRequest());
//     const ipAddress = await getIPAddress();
//     if (!ipAddress) {
//         dispatch(nearbyFailure("Could not fetch IP address."));
//         return;
//     }

//     try {
//       const response = await fetch(`http://localhost:3000/api/v1/nearby?geoip=${ipAddress}`);
//       if (!response.ok) throw new Error(`Request failed with status: ${response.status}`);
      
//       const events = await response.json();
//       dispatch(nearbySuccess(events));
//     } catch (error) {
//       dispatch(nearbyFailure(error.message));
//     }
// };
