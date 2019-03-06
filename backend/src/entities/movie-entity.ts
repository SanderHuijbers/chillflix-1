import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {UserEntity} from '../features/users/entities/user-entity';

@Entity("movie")
export class MovieEntity {
	@PrimaryGeneratedColumn() public readonly id?: number;
	@Column('varchar') public readonly title: string;
	@Column('integer') public readonly year: number;
	@Column('varchar') public readonly imdbId: string;
	@Column('varchar') public readonly type: string;
	@Column('varchar') public readonly posterUrl: string;

	/*@ManyToMany(type => UserEntity, user => user.movies)*/
	public users: UserEntity[];

	constructor(title: string, year: number, imdbId: string, type: string, posterUrl: string) {
		this.title = title;
		this.year = year;
		this.imdbId = imdbId;
		this.type = type;
		this.posterUrl = posterUrl;
	}

	public addUser(user: UserEntity): void {
		this.users = this.users ? [...this.users, user] : [user];
	}
}
