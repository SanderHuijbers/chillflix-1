import {SearchActionTypes, SearchActionUnion} from './search.actions';
import {Film} from '../../models/film';

export type SearchState = {
	searchQuery?: string;
	searchResults?: Film[];
};

export const initialState: SearchState = {
	searchQuery: undefined,
	searchResults: undefined
};

export function SearchReducer(state: SearchState = initialState, action: SearchActionUnion): SearchState {
	switch (action.type) {
		case SearchActionTypes.Search:
			return {...state, searchQuery: action.payload};
		case SearchActionTypes.SearchDataLoaded:
			return {...state, searchResults: action.payload};
		default:
			return state;
	}
}
