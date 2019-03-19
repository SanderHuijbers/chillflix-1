import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FilmSearchComponent} from './components/film-search/film-search.component';
import {FilmDetailsComponent} from './components/film-details/film-details.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'film-search', component: FilmSearchComponent}, // canActivate: [AuthGuard]
	{path: 'login', component: LoginComponent},
	{path: 'film-details/:imdbId', component: FilmDetailsComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
