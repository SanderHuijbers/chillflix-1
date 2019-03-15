import {HttpService, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CreateMovieDto} from '../../dtos/create-movie-dto';
import {MovieDetail} from '../../../../shared/models/movie-detail.model';
import {IOmdbDetailResponse} from './omdb-detail-response.interface';
import {IOmdbMovieResponse, IOmdbSearchMoviesResponse} from './omdb-search-response.interface';

@Injectable()
export class OmdbProxyService {
	private static apiKey = 'e36ea2a2';
	private static api = 'http://www.omdbapi.com';
	private static defaultParams = {apiKey: OmdbProxyService.apiKey};

	constructor(private readonly http: HttpService) {
	}

	searchMovies$(movieTitle: string): Observable<CreateMovieDto[]> {
		return this.http.get<IOmdbSearchMoviesResponse>(OmdbProxyService.api, {
			params: {
				...OmdbProxyService.defaultParams,
				s: movieTitle
			}
		}).pipe(map(axiosResponse => axiosResponse.data.Search.map(movie => OmdbProxyService.fromOmdbMovieResponse(movie))))
	}

	public movieDetails$(movieId: string): Observable<MovieDetail> {
		return this.http.get<IOmdbDetailResponse>(OmdbProxyService.api, {
			params: {
				...OmdbProxyService.defaultParams,
				i: movieId
			}
		}).pipe(map(axiosResponse => OmdbProxyService.OMDBDetailToFilmDetail(axiosResponse.data)));
	}

	private static OMDBDetailToFilmDetail(omdbDetail: IOmdbDetailResponse): MovieDetail {
		return new MovieDetail(
			omdbDetail.Title,
			omdbDetail.Year,
			omdbDetail.Rated,
			omdbDetail.Released,
			omdbDetail.Runtime,
			omdbDetail.Genre,
			omdbDetail.Director,
			omdbDetail.Writer,
			omdbDetail.Actors,
			omdbDetail.Plot,
			omdbDetail.Language,
			omdbDetail.Country,
			omdbDetail.Awards,
			omdbDetail.Poster,
			omdbDetail.Metascore,
			omdbDetail.imdbRating,
			omdbDetail.imdbVotes,
			omdbDetail.imdbID,
			omdbDetail.Type,
			omdbDetail.DVD,
			omdbDetail.BoxOffice,
			omdbDetail.Production,
			omdbDetail.Website,
			omdbDetail.Response
		);
	}

	private static fromOmdbMovieResponse(omdbMovieResponse: IOmdbMovieResponse): CreateMovieDto {
		return new CreateMovieDto(
			omdbMovieResponse.Title,
			parseInt(omdbMovieResponse.Year),
			omdbMovieResponse.imdbID,
			omdbMovieResponse.Type,
			omdbMovieResponse.Poster)
	}
}

