import * as ActionTypes from '../constants/actionType';

export function changeTabar(tab) {
	return {
		type: ActionTypes.CHANGE_TAB,
		payload: { tab }
	};
}