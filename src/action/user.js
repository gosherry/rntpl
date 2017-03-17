import * as ActionTypes from '../constants/actionType';

export function fecthData() {
	return dispatch => {
		return fetch('https://gold.xitu.io/api/v1/timeline/57c0132f128fe1005fb7f4f7/2017-01')
      .then((response) => response.json())
      .then((responseJson) => {
      	console.log('----- ', responseJson.data);
      	dispatch(_data(responseJson.data));
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
	}
	// return {
	// 	type: ActionTypes.FETCH_DATA
	// }
}

function _data(data) {
	return {
		type: ActionTypes.FETCH_DATA,
		payload: data
	}
}