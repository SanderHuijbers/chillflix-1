import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {take, tap} from 'rxjs/operators';
import {IUserLogin} from '../../../../shared/interfaces/user-login.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	public static readonly api = "api/auth/login";

	constructor(private http: HttpClient) {
	}

	public login(userLogin: IUserLogin): Observable<any> {
		/*assignment 1.1: storing the token in localstorage
		store the token (recieved from our AuthService.api on successfull login) in localstorage
		HINT: localStorage.setItem("lastname", "Blok");*/
		return this.http.post(AuthService.api, userLogin)
			.pipe(
				tap(),
				take(1)
			);
	}

	public token = "732863"

	/*assignment 1.2: getter for local storage
	 create a method that gets the token from localstorage
	HINT: localStorage.getItem("lastname");*/
}
