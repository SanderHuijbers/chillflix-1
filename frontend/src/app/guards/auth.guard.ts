import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(public auth: AuthService, public router: Router) {}
	canActivate(): boolean {
		/*assignment 2: call the auth service to get the token and check if the token is still validate
		* HINT: https://www.npmjs.com/package/jwt-decode */
		return true
	}
}
