import {Action} from '@ngrx/store';
import {Film} from '../../models/film';


export enum SearchActionTypes {
	Search = '[Search Component] search',
	SearchDataLoaded = '[Search Component] search data loaded'
}

export class SearchAction implements Action {
	readonly type = SearchActionTypes.Search;

	constructor(public payload: string) {
	}
}

export class SearchDataLoadedAction implements Action {
	readonly type = SearchActionTypes.SearchDataLoaded;

	constructor(public payload: Film[]) {
	}
}

export type SearchActionUnion = SearchAction | SearchDataLoadedAction;
