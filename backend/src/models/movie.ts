import {MovieEntity} from '../entities/movie-entity';

export class Movie {
	constructor(
		public readonly id: number,
		public readonly title: string,
		public readonly year: number,
		public readonly imdbId: string,
		public readonly type: string,
		public readonly posterUrl: string
	) {
	}

	public static fromMovieEntity(movieEntity: MovieEntity): Movie {
		if (movieEntity.id) return new Movie(movieEntity.id, movieEntity.title, movieEntity.year, movieEntity.imdbId, movieEntity.type, movieEntity.posterUrl)
		else throw new Error("Movie has no Id")
	}
}
