import {Component, OnInit} from '@angular/core';
import {Animations} from '../../shared/utils/animations';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	animations: [Animations.fadeInOut]
})
export class LoginComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}

}
