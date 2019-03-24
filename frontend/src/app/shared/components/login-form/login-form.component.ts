import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IUserLogin} from '../../../../../../shared/interfaces/user-login.interface';
import {Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {LoginAction} from './login.actions';
import {AppState} from '../../../reducers';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

	public readonly loginForm = new FormGroup({
		userName: new FormControl('bla@bla.nl', [Validators.required, Validators.email]),
		password: new FormControl('Bla123$bla', [Validators.required])
	});

	constructor(private authService: AuthService,
	            private store: Store<AppState>) {
	}

	ngOnInit() {
	}

	public onSubmit() {
		this.store.dispatch(new LoginAction(LoginFormComponent.userLogin(this.loginForm)));
	}

	private static userLogin(loginForm: FormGroup): IUserLogin {
		return {
			userName: loginForm.controls.userName.value,
			password: loginForm.controls.password.value
		}
	}

}
