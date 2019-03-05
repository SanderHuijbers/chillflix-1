import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {Movie} from '../models/movie';

@Entity("movie")
export class MovieEntity {
	@PrimaryGeneratedColumn() public readonly id?: number;
	@Column('varchar') public readonly title: string;
	@Column('integer') public readonly year: number;
	@Column('varchar') public readonly imdbId: string;
	@Column('varchar') public readonly type: string;
	@Column('varchar') public readonly posterUrl: string;

	constructor(title: string, year: number, imdbId: string, type: string, posterUrl: string) {
		this.title = title;
		this.year = year;
		this.imdbId = imdbId;
		this.type = type;
		this.posterUrl = posterUrl;
	}
}
