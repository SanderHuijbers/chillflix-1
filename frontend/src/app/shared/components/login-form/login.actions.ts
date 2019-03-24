import {Action} from '@ngrx/store';
import {IUserLogin} from '../../../../../../shared/interfaces/user-login.interface';

export enum LoginActionTypes {
	Login = '[LoginForm Component] Login',
}

export class LoginAction implements Action {
	readonly type = LoginActionTypes.Login;

	constructor(public payload: IUserLogin) {}
}

export type LoginUnion = LoginAction;
