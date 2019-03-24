import {Injectable} from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {IUserLogin} from '../../../../shared/interfaces/user-login.interface';
import {map, switchMap, tap} from 'rxjs/operators';
import {IToken} from '../../../../shared/interfaces/token-response.interface';
import {LoginAction, LoginActionTypes} from '../shared/components/login-form/login.actions';
import {LoginFormComponent} from '../shared/components/login-form/login-form.component';
import {AppState} from '../reducers';

@Injectable({
	providedIn: 'root'
})
export class JwtTokenInterceptor implements HttpInterceptor {
	private readonly token$ = this.store.select(state => state.login);

	constructor(private readonly store: Store<AppState>) {
	}


	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		/*
		here we are listening to the login state from the store which is filled by a dispatched event in the login-form.component
		and then filled by a side effect
		*/
		return this.token$.pipe(
			map(token => token ? JwtTokenInterceptor.setTokenInAuthHeader(request, token.value) : request),
			switchMap(request => next.handle(request))
		);
	}

	private static setTokenInAuthHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
		return request.clone({
			setHeaders: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}
