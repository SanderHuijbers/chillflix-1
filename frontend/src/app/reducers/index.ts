import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {loginReducer} from '../shared/components/login-form/login.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  login: loginReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
