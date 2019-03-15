import {IMovieDetail} from '../interfaces/movie-detail.interface';

export class MovieDetail implements IMovieDetail {
	constructor(
		public readonly title: string,
		public readonly year: string,
		public readonly rated: string,
		public readonly released: string,
		public readonly runtime: string,
		public readonly genre: string,
		public readonly director: string,
		public readonly writer: string,
		public readonly actors: string,
		public readonly plot: string,
		public readonly language: string,
		public readonly country: string,
		public readonly awards: string,
		public readonly poster: string,
		public readonly metaScore: string,
		public readonly imdbRating: string,
		public readonly imdbVotes: string,
		public readonly imdbId: string,
		public readonly type: string,
		public readonly dvd: string,
		public readonly boxOffice: string,
		public readonly production: string,
		public readonly website: string,
		public readonly response: string
	) {
	}
}
