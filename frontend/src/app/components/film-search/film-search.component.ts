import {Component, OnInit} from '@angular/core';
import {Film} from '../../models/film';
import {FilmsService} from '../../services/films.service';
import {debounceTime, filter, map, take, tap} from 'rxjs/operators';
import {FormControl, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Animations} from '../../shared/utils/animations';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {SearchAction} from './search.actions';
import {AddToBucket} from '../../shared/components/film-bucket/bucket.actions';

@Component({
	selector: 'app-film-search',
	templateUrl: './film-search.component.html',
	styleUrls: ['./film-search.component.scss'],
	animations: [Animations.fadeInOut]
})
export class FilmSearchComponent implements OnInit {
	public films: Film[] | undefined | null = undefined;
	public readonly films$ = this.store.select(state => state.search.searchResults);
	public bucket: Film[] = [];
	public searchControl = new FormControl(undefined, [Validators.minLength(3), Validators.required]);

	private subscriptions = new Subscription();

	constructor(private filmsService: FilmsService,
	            private store: Store<AppState>) {
	}

	ngOnInit(): void {
		this.store.select(state => state.search.searchQuery)
			.pipe(
				take(1),
				tap(searchQuery => this.searchControl.setValue(searchQuery))
			).subscribe();

		this.subscriptions.add(this.handleSearchInputChangeSubscription());
	}

	private handleSearchInputChangeSubscription(): Subscription {
		return this.searchControl.valueChanges.pipe(
			tap(() => this.films = null),
			filter(() => this.searchControl.valid),
			debounceTime(500),
			tap(value => this.refreshMovieSearchData(value))
		).subscribe()
	}

	private refreshMovieSearchData(input: string): void {
		this.store.dispatch(new SearchAction(input))
	}

	public handleOnAddToBucket(film: Film): void {
		this.store.dispatch(new AddToBucket(film));
	}

	public handleOnRemoveFilm(filmToRemove: Film): void {
		this.bucket = this.bucket.filter(film => film.imdbId !== filmToRemove.imdbId);
	}
}
