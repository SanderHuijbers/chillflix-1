export interface IOmdbSearchMoviesResponse {
	"Search": IOmdbMovieResponse[]
}

export interface IOmdbMovieResponse {
	readonly Title: string;
	readonly Year: string;
	readonly imdbID: string;
	readonly Type: string;
	readonly Poster: string;
}
