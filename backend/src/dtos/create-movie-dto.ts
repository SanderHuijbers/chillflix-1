import {ApiModelProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from 'class-validator';
import {MovieEntity} from '../entities/movie-entity';
import {OmdbMovieResponse} from '../services/omdb-proxy/omdb-proxy.service';

export class CreateMovieDto {
	@IsString()
	@ApiModelProperty()
	public readonly title: string;

	@IsNumber()
	@ApiModelProperty()
	public readonly year: number;

	@IsString()
	@ApiModelProperty()
	public readonly imdbId: string;

	@IsString()
	@ApiModelProperty()
	public readonly type: string;

	@IsString()
	@ApiModelProperty()
	public readonly posterUrl: string;

	movieEntity(): MovieEntity {
		return new MovieEntity(this.title, this.year, this.imdbId, this.type, this.posterUrl)
	}

	constructor(title: string, year: number, imdbId: string, type: string, posterUrl: string) {
		this.title = title;
		this.year = year;
		this.imdbId = imdbId;
		this.type = type;
		this.posterUrl = posterUrl;
	}

	public static fromOmdbMovieResponse(omdbMovieResponse: OmdbMovieResponse): CreateMovieDto {
		return new CreateMovieDto(
			omdbMovieResponse.Title,
			parseInt(omdbMovieResponse.Year),
			omdbMovieResponse.imdbID,
			omdbMovieResponse.Type,
			omdbMovieResponse.Poster)
	}
}
