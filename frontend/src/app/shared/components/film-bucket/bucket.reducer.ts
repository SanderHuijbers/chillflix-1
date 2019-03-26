import {BucketActionTypes, BucketActionUnion} from './bucket.actions';
import {Film} from '../../../models/film';

export type BucketState = Film[];

export const initialState: BucketState = [];

export function BucketReducer(state: BucketState = initialState, action: BucketActionUnion): BucketState {
	switch (action.type) {
		case BucketActionTypes.add:
			return [...state, action.payload];
		case BucketActionTypes.remove:
			return state.filter(film => film.imdbId !== action.payload.imdbId);
		default:
			return state;
	}
}
