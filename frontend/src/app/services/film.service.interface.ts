import {Observable} from 'rxjs';
import {Film} from '../models/film';
import {MovieDetail} from '../../../../shared/models/movie-detail.model';

export interface IFilmService {
	search$(title: string): Observable<Film[]>;
	filmDetailsById$(imdbId: string): Observable<MovieDetail>;
}

