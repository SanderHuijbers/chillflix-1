import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './reducers';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public readonly title = 'CHILLFLIX';
	public readonly loggedInUser = this.store.select(state => state.login);

	constructor(private readonly store: Store<AppState>) {

	}
}
