import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IUserLogin} from '../../../../../../shared/interfaces/user-login.interface';
import {Store} from '@ngrx/store';
import {LoginAction} from './login.actions';
import {tap} from 'rxjs/operators';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

	public readonly loginForm = new FormGroup({
		userName: new FormControl(undefined, [Validators.required, Validators.email]),
		password: new FormControl(undefined, [Validators.required])
	});

	constructor(private authService: AuthService,
	            private store: Store<IUserLogin>) {
		this.store.pipe(tap(console.log))
	}

	ngOnInit() {
	}

	public onSubmit() {
		this.store.dispatch(new LoginAction(LoginFormComponent.userLogin(this.loginForm)));
		//this.authService.login(LoginFormComponent.userLogin(this.loginForm)).subscribe();
	}

	private static userLogin(loginForm: FormGroup): IUserLogin {
		return {
			userName: loginForm.controls.userName.value,
			password: loginForm.controls.password.value
		}
	}

}
