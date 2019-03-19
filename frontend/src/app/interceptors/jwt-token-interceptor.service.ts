import {Injectable} from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class JwtTokenInterceptor implements HttpInterceptor {
	constructor(public auth: AuthService) {
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		/*assignment 1.3: adding the token to every request
		get the stored token from the authService using the getter we made in 1.2 and append it to the `Bearer ` string below
		HINT: localStorage.setItem("lastname", "Blok");*/
		console.log("intercepting");
		request = request.clone({
			setHeaders: {
				Authorization: `Bearer ${this.auth.token()}`
			}
		});
		return next.handle(request);
	}
}
