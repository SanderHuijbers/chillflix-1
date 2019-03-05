import {HttpService, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Movie} from '../../models/movie';
import {CreateMovieDto} from '../../dtos/create-movie-dto';

@Injectable()
export class OmdbProxyService {
	private static apiKey = 'e36ea2a2';
	private static api = `http://www.omdbapi.com?apikey=${OmdbProxyService.apiKey}`;

	constructor(private readonly http: HttpService){}

	searchMovies(searchQuery: string): Observable<CreateMovieDto[]> {
		return this.http.get<OmdbSearchMoviesResponse>(`${OmdbProxyService.api}&s=${searchQuery}`)
			.pipe(
				map(axiosResponse => axiosResponse.data.Search.map(movie => CreateMovieDto.fromOmdbMovieResponse(movie)))
			)
	}
}


export interface OmdbSearchMoviesResponse {
	"Search": OmdbMovieResponse[]
}

export interface OmdbMovieResponse {
	readonly Title: string;
	readonly Year: string;
	readonly imdbID: string;
	readonly Type: string;
	readonly Poster: string;
}
