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
		return this.http.post<ITokenResponse>(AuthService.api, userLogin)
			.pipe(
				tap(data=> localStorage.setItem('token',  data.token)),
				take(1)
			);
	}

	public logout() {
		localStorage.removeItem('token')
	}

	public token(): string {
		return localStorage.getItem('token') as string;
	}

	/*assignment 1.2: getter for local storage
	 create a method that gets the token from localstorage
	HINT: localStorage.getItem("lastname");*/
}

interface ITokenResponse {
	token: string;
}
