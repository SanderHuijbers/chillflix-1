import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateMovieDto} from '../../dtos/create-movie-dto';
import {Movie} from '../../models/movie';
import {OmdbProxyService} from '../../services/omdb-proxy/omdb-proxy.service';
import {MoviesService} from '../../services/movie/movies.service';
import {ApiUseTags} from '@nestjs/swagger';
import {Observable} from 'rxjs';

@ApiUseTags('movies')
@Controller('movies')
export class MovieController {
	constructor(private readonly moviesService: MoviesService,
	            private readonly omdbProxyService: OmdbProxyService) {
	}

	@Get('search/:searchquery')
	search(@Param('searchquery') searchQuery: string): Observable<CreateMovieDto[]> {
		return this.omdbProxyService.searchMovies(searchQuery);
	}

	@Post()
	saveMovie(@Body() createMovieDto: CreateMovieDto) {
		this.moviesService.saveMovie(createMovieDto.movieEntity());
	}

	@Get()
	async getMovies(): Promise<Movie[]> {
		const movieEntities = await this.moviesService.movies();
		return movieEntities.map(movieEntity => Movie.fromMovieEntity(movieEntity))
	}
}



