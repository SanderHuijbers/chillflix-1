import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {SearchAction, SearchActionTypes, SearchDataLoadedAction} from './search.actions';
import {FilmsService} from '../../services/films.service';

@Injectable()
export class SearchEffects {

	@Effect()
	public readonly = this.actions$
		.pipe(
			ofType(SearchActionTypes.Search),
			tap(console.log),
			mergeMap((searchAction: SearchAction) => this.filmsService.search$(searchAction.payload)
				.pipe(
					map(films => (new SearchDataLoadedAction(films))),
					catchError(() => EMPTY)
				))
		);

	constructor(
		private actions$: Actions,
		private filmsService: FilmsService
	) {
	}
}
