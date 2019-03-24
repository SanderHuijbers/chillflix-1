import {LoginActionTypes, LoginUnion} from './login.actions';

export const initialState = undefined;

export function loginReducer(state = initialState, action: LoginUnion) {
	switch (action.type) {
		case LoginActionTypes.Login:
			return state;

		default:
			return state;
	}
}
