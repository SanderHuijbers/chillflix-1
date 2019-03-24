import {Action, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {loginReducer, LoginState} from '../shared/components/login-form/login.reducer';
import {storeFreeze} from 'ngrx-store-freeze';
import {SearchReducer, SearchState} from '../components/film-search/search.reducer';

export interface AppState extends Action {
	login: LoginState;
	search: SearchState;
}

export const reducers: ActionReducerMap<AppState> = {
	//@ts-ignore
	login: loginReducer,
	//@ts-ignore
	search: SearchReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
