import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../services/users.service';
import {ICreateUser} from '../../../../../../shared/interfaces/create-user.interface';

@Component({
	selector: 'app-signup-form',
	templateUrl: './signup-form.component.html',
	styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

	/*here the form is created and a default value is given (undefined) along with some validations*/
	public readonly signUpForm = new FormGroup({
		userName: new FormControl(undefined, [Validators.required, Validators.email]),
		age: new FormControl(undefined, [Validators.required, Validators.min(15)]),
		password: new FormControl(undefined, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
	});

	constructor(private userService: UsersService) {
	}

	ngOnInit() {
		/* subscribing to the forms valueChanges property so we can do some checking with it*/
		this.signUpForm.valueChanges.subscribe(formValues => console.log("logging form values on changes: ", formValues))
	}

	/* on form submit sending data to the service and saving the user*/
	public onSubmit(): void {
		if (this.signUpForm.valid) this.userService.saveUser(SignupFormComponent.createUser(this.signUpForm)).subscribe();
		Object.values(this.signUpForm.controls).forEach(control => control.markAsDirty());
	}

	public static createUser(signUpForm: FormGroup): ICreateUser {
		return {
			userName: signUpForm.controls.userName.value,
			age: signUpForm.controls.age.value,
			password: signUpForm.controls.password.value
		}
	}
}
