import {MovieEntity} from '../../entities/movie-entity';
import {Repository} from "typeorm";
import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity} from '../../features/users/entities/user-entity';
import {throwIfEmpty} from 'rxjs/operators';

@Injectable()
export class MoviesService {
	constructor(@InjectRepository(MovieEntity) private readonly moviesRepository: Repository<MovieEntity>,
	            @InjectRepository(UserEntity) private readonly usersRepository: Repository<UserEntity>) {
	}

	async movies(): Promise<MovieEntity []> {
		return await this.moviesRepository.find();
	}

	async saveMovie(movieEntity: MovieEntity): Promise<MovieEntity> {
		const foundMovie = this.moviesRepository.findOne({imdbId: movieEntity.imdbId});
		if (foundMovie) return this.moviesRepository.save(movieEntity);
		else throw new HttpException("user not found", HttpStatus.NOT_FOUND);
	}

	public async saveMovieForUser(movieEntity: MovieEntity, userId: string): Promise<MovieEntity[]> {
		const userEntity: UserEntity = await this.usersRepository.findOne(userId, {relations: ["movies"]});
		userEntity.addMovie(movieEntity);
		return (await this.usersRepository.save(userEntity)).movies;
	}

	public async moviesForUser(userId: string): Promise<MovieEntity[]> {
		const userEntity: UserEntity = await this.usersRepository.findOne(userId, {relations: ["movies"]});
		if (userEntity) return userEntity.movies;
		else throw new HttpException("user not found", HttpStatus.NOT_FOUND);
	}
}

