import {SearchActionTypes, SearchActionUnion} from './search.actions';
import {Film} from '../../models/film';

export type SearchState = undefined | Film[];

export const initialState: SearchState = undefined;

export function SearchReducer(state: SearchState = initialState, action: SearchActionUnion): SearchState {
	switch (action.type) {
		case SearchActionTypes.Search:
			return state && [...state];
		case SearchActionTypes.SearchDataLoaded:
			return [...action.payload];
		default:
			return state;
	}
}
