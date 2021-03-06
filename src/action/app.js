import * as ActionTypes from '../constants/actionType';

export function changeTabar(tab) {
	return {
		type: ActionTypes.CHANGE_TAB,
		payload: { tab }
	};
}

export function fetchData() {
	return dispatch => {
		fetch('https://gold.xitu.io/api/v1/timeline/57c0132f128fe1005fb7f4f7/2017-01')
      .then((response) => response.json())
      .then((responseJson) => {
      	console.log('----- ', responseJson.data);
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
	}
}