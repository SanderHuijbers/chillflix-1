import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from '../../../models/film';
import {AppState} from '../../../reducers';
import {Store} from '@ngrx/store';
import {RemoveFromBucket} from './bucket.actions';

@Component({
	selector: 'app-film-bucket',
	templateUrl: './film-bucket.component.html',
	styleUrls: ['./film-bucket.component.scss']
})
export class FilmBucketComponent implements OnInit {
	// assignment 2 BONUS FOR DIE HARDS: implement ngrx State management for the movie bucket instead of working with @Input()/@Output() decorators
	public films$ = this.store.select(state => state.bucket);

	constructor(private readonly store: Store<AppState>) {
	}

	ngOnInit() {
	}

	handleDeleteButtonClick(film: Film): void {
		this.store.dispatch(new RemoveFromBucket(film));
	}
}
