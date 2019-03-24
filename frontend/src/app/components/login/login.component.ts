import {Component, OnInit} from '@angular/core';
import {Animations} from '../../shared/utils/animations';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	animations: [Animations.fadeInOut]
})
export class LoginComponent implements OnInit {
	public readonly loggedInUser = this.store.select(state => state.login);

	constructor(private store: Store<AppState>) {
	}

	ngOnInit() {
	}
}
