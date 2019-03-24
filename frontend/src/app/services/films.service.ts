import {IFilmService} from './film.service.interface';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Film} from '../models/film';
import {map, take} from 'rxjs/operators';
import {MovieDetail} from '../../../../shared/models/movie-detail.model';
import {ICreateMovie} from '../../../../shared/interfaces/create-movie.interface';
import {IMovieDetail} from '../../../../shared/interfaces/movie-detail.interface';

@Injectable({
	providedIn: 'root'
})
export class FilmsService implements IFilmService{
	private static api = 'api/movies';

	constructor(private http: HttpClient) {
	}

	public search$(title: string): Observable<Film[]> {
		return this.http.get<ICreateMovie[]>(`${FilmsService.api}/search/${title}`)
			.pipe(
				map(FilmsService.MovieSearchResponseToFilmsMapper),
				take(1)
			)
	}

	public filmDetailsById$(imdbId: string): Observable<MovieDetail> {
		return this.http.get<IMovieDetail>(`${FilmsService.api}/details/${imdbId}`)
			.pipe(
				map(FilmsService.OMDBDetailToFilmDetail)
			);
	}

	private static OMDBDetailToFilmDetail(omdbDetail: IMovieDetail): MovieDetail {
		return new MovieDetail(
			omdbDetail.title,
			omdbDetail.year,
			omdbDetail.rated,
			omdbDetail.released,
			omdbDetail.runtime,
			omdbDetail.genre,
			omdbDetail.director,
			omdbDetail.writer,
			omdbDetail.actors,
			omdbDetail.plot,
			omdbDetail.language,
			omdbDetail.country,
			omdbDetail.awards,
			omdbDetail.poster,
			omdbDetail.metaScore,
			omdbDetail.imdbRating,
			omdbDetail.imdbVotes,
			omdbDetail.imdbId,
			omdbDetail.type,
			omdbDetail.dvd,
			omdbDetail.boxOffice,
			omdbDetail.production,
			omdbDetail.website,
			omdbDetail.response
		);
	}

	private static MovieSearchResponseToFilmsMapper(omdbSearchResponse: ICreateMovie[]): Film[] {
		return omdbSearchResponse.map(FilmsService.OMDBMovieToFilm);
	}

	private static OMDBMovieToFilm(omdbFilm: ICreateMovie): Film {
		return new Film(omdbFilm.posterUrl, omdbFilm.title, omdbFilm.type, omdbFilm.year, omdbFilm.imdbId);
	}
}
