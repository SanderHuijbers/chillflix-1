import {Action} from '@ngrx/store';
import {IUserLogin} from '../../../../../../shared/interfaces/user-login.interface';
import {IToken} from '../../../../../../shared/interfaces/token-response.interface';

export enum LoginActionTypes {
	Login = '[LoginForm Component] Login',
	TokenLoaded = '[LoginForm Component] TokenLoaded',
}

/*here we define our actions that can be used to dispatch state changes in the reducers*/
export class LoginAction implements Action {
	readonly type = LoginActionTypes.Login;

	constructor(public payload: IUserLogin) {
	}
}

export class TokenLoadedAction implements Action {
	readonly type = LoginActionTypes.TokenLoaded;

	constructor(public payload: IToken) {
	}
}

export type LoginActionUnion = LoginAction | TokenLoadedAction;
