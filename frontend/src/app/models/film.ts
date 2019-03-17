import {ICreateMovie} from '../../../../shared/interfaces/create-movie.interface';

export class Film implements ICreateMovie {
	constructor(public posterUrl: string,
	            public title: string,
	            public type: string,
	            public year: number,
	            public imdbId: string) {
	}
}
