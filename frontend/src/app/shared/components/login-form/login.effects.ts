import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {LoginAction, LoginActionTypes, TokenLoadedAction} from './login.actions';
import {AuthService} from '../../../services/auth.service';

@Injectable()
export class LoginEffects {

	/*  an effect stands for side effect
		instead of having these in our stream we keep it out so our stream remain pure.
		We instead let our side effects listen to our stream with the @Effect() decorator */
	@Effect()
	public readonly loginUser$ = this.actions$
		.pipe(
			ofType(LoginActionTypes.Login),
			switchMap((loginAction: LoginAction) => this.authService.login(loginAction.payload)
				.pipe(
					map(token => (new TokenLoadedAction(token))),
					catchError(() => EMPTY)
				))
		);

	constructor(
		private actions$: Actions,
		private authService: AuthService
	) {
	}
}
