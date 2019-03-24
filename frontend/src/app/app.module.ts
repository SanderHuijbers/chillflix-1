import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BillionDollarsPipe} from './pipes/billion-dollars.pipe';
import {FilterPipe} from './pipes/filter-boolean-property.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './components/home/home.component';
import {FilmSearchComponent} from './components/film-search/film-search.component';
import {FilmDetailsComponent} from './components/film-details/film-details.component';
import {FilmListItemComponent} from './shared/components/film-list-item/film-list-item.component';
import {FilmBucketComponent} from './shared/components/film-bucket/film-bucket.component';
import {LoginComponent} from './components/login/login.component';
import {LoginFormComponent} from './shared/components/login-form/login-form.component';
import {SignupFormComponent} from './shared/components/signup-form/signup-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {LoginEffects} from './shared/components/login-form/login.effects';
import {JwtTokenInterceptor} from './interceptors/jwt-token-interceptor.service';
import {SearchEffects} from './components/film-search/search.effects';


@NgModule({
	declarations: [
		AppComponent,
		BillionDollarsPipe,
		FilterPipe,
		HomeComponent,
		FilmSearchComponent,
		FilmDetailsComponent,
		FilmListItemComponent,
		FilmBucketComponent,
		LoginComponent,
		LoginFormComponent,
		SignupFormComponent,
	],
	imports: [
		StoreModule.forRoot(reducers, {metaReducers}),
		EffectsModule.forRoot([LoginEffects, SearchEffects]),
		StoreDevtoolsModule.instrument({
			maxAge: 10
		}),
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: JwtTokenInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
