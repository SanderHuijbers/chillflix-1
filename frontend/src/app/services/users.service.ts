import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ICreateUser} from '../../../../shared/interfaces/create-user.interface';
import {Observable, of, throwError} from 'rxjs';
import {catchError, take} from 'rxjs/operators';
import {IUserLogin} from '../../../../shared/interfaces/user-login.interface';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	private static api = 'api/users';

	constructor(private http: HttpClient) {
	}

	public saveUser(user: ICreateUser): Observable<IUserLogin> {
		return this.http.post<IUserLogin>(UsersService.api, user).pipe(
			take(1),
			catchError((httpErrorResponse: HttpErrorResponse) => {
				alert(httpErrorResponse.error.message);
				return throwError(httpErrorResponse.error.message);
			})
		);
	}
}
