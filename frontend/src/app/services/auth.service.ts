import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {IUserLogin} from '../../../../shared/interfaces/user-login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static readonly api = "api/auth/login";

  constructor() { }

  public login(userLogin: IUserLogin): Observable<any> {
    return this.http.post(AuthService.api, userLogin).pipe(take(1));
  }
}
