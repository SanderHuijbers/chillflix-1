import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {IUserLogin} from '../../../../shared/interfaces/user-login.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static readonly api = "api/auth/login";

  constructor(private http: HttpClient) { }

  public login(userLogin: IUserLogin): Observable<any> {
    return this.http.post(AuthService.api, userLogin).pipe(take(1));
  }
}
