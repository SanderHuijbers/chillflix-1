import {Action, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {loginReducer, LoginState} from '../shared/components/login-form/login.reducer';
import {storeFreeze} from 'ngrx-store-freeze';
import {SearchReducer, SearchState} from '../components/film-search/search.reducer';
import {BucketReducer, BucketState} from '../shared/components/film-bucket/bucket.reducer';

export interface AppState extends Action {
	login: LoginState;
	search: SearchState;
	bucket: BucketState;
}

export const reducers: ActionReducerMap<AppState> = {
	//@ts-ignore
	login: loginReducer,
	//@ts-ignore
	search: SearchReducer,
	//@ts-ignore
	bucket: BucketReducer

};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
