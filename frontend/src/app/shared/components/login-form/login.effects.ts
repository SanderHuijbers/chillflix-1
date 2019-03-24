import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {LoginAction, LoginActionTypes} from './login.actions';
import {AuthService} from '../../../services/auth.service';

@Injectable()
export class LoginEffects {
	@Effect()
	loadMovies$ = this.actions$
		.pipe(
			ofType(LoginActionTypes.Login),
			mergeMap((loginAction: LoginAction) => this.authService.login(loginAction.payload)
				.pipe(
					map(movies => ({type: `${LoginActionTypes.Login} was done succesfully`, payload: movies})),
					catchError(() => EMPTY)
				))
		);

	constructor(
		private actions$: Actions,
		private authService: AuthService
	) {
	}
}
