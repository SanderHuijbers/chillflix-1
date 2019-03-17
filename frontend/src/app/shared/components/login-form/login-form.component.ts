import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

	/*assignment 1.1 Binding: create a formGroup containing the controls we see in our page
	* HINT: new FormGroup & new FormControl*/

	/*Assignment 2.1 Validation: add validations to the formGroup/controls we created in assignment 1
	* HINT: new FormControl(undefined, [Validators.required, Validators.email])*/

	constructor(private authService: AuthService) {
	}

	ngOnInit() {
		/*assignment 1.3 Binding: subscribe to the formGroups valueChanges property and console.log the current value
		* HINT: subscribe()*/
	}

	public onSubmit () {
		/*assignment 3.3 logging in: on submit call the authService to login the user
		HINT: no hint*/
	}

}
