import {IToken} from '../../../../../../shared/interfaces/token-response.interface';
import {LoginActionTypes, LoginActionUnion} from './login.actions';
import {Action} from '@ngrx/store';

export type LoginState = IToken | undefined;

export const initialState: LoginState = undefined;

/*
in our reducer we put our logic to modify the state
the reducer is triggered by an event that is dispatched from our login-form.component
and later also by a side effect in our login.effects.ts
*/
export function loginReducer(state: LoginState = initialState, action: LoginActionUnion): LoginState {
	switch (action.type) {
		case LoginActionTypes.Login:
			return state && {...state};
		case LoginActionTypes.TokenLoaded:
			return {...state, ...action.payload};
		default:
			return state;
	}
}
