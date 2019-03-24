import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {AppState} from '../reducers';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	private readonly token$ = this.store.select(state => state.login);

	constructor(public readonly router: Router,
	            private readonly store: Store<AppState>) {
	}

	canActivate(): Observable<boolean> {
		return this.token$.pipe(
			map(token => !!token),
			tap(tokenExists => !tokenExists && this.router.navigate(['login']))
		);
	}
}
