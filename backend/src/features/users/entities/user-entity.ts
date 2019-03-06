import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {MovieEntity} from '../../../entities/movie-entity';

@Entity("user")
export class UserEntity {
	@PrimaryGeneratedColumn() public readonly id?: number;
	@Column('varchar', {unique: true}) public readonly userName: string;
	@Column('integer') public readonly age: number;
	@Column('varchar') public readonly password: string;

	/*@ManyToMany(type => MovieEntity, movie => movie.users, {
		cascade: true
	})
	@JoinTable({name: 'user_movie'})*/
	public movies?: MovieEntity[];

	constructor(userName: string, age: number, password: string) {
		this.userName = userName;
		this.age = age;
		this.password = password;
	}

	public addMovie(movieEntity: MovieEntity): void {
		this.movies = this.movies ? [...this.movies, movieEntity] : [movieEntity];
	}
}
