import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IUserLogin} from '../../../../../../shared/interfaces/user-login.interface';

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

	constructor(private authService: AuthService) {
	}

	ngOnInit() {
		this.loginForm.valueChanges.subscribe(console.log);
	}

	public onSubmit() {
		this.authService.login(LoginFormComponent.userLogin(this.loginForm)).subscribe();
	}

	private static userLogin(loginForm: FormGroup): IUserLogin {
		return {
			userName: loginForm.controls.userName.value,
			password: loginForm.controls.password.value
		}
	}

}
