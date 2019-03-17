import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieDetail} from '../../../../../shared/models/movie-detail.model';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FilmService} from '../../services/film.service';
import {Animations} from '../../shared/utils/animations';


@Component({
	selector: 'app-film-details',
	templateUrl: './film-details.component.html',
	styleUrls: ['./film-details.component.scss'],
	animations: [Animations.fadeInOut]
})
export class FilmDetailsComponent {
	public filmDetails$: Observable<MovieDetail | undefined> = this.activatedRoute.params
		.pipe(switchMap(params => this.filmService.filmDetailsById$(params.imdbId)));

	constructor(private activatedRoute: ActivatedRoute,
	            private filmService: FilmService) {
	}
}
