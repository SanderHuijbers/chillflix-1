import {MovieEntity} from '../../entities/movie-entity';
import {Repository} from "typeorm";
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity} from '../../features/users/entities/user-entity';
import {User} from '../../models/user';

@Injectable()
export class MoviesService {
	constructor(@InjectRepository(MovieEntity) private readonly moviesRepository: Repository<MovieEntity>,
	            @InjectRepository(UserEntity) private readonly usersRepository: Repository<UserEntity>) {
	}

	async movies(): Promise<MovieEntity []> {
		return await this.moviesRepository.find();
	}

	async saveMovie(movieEntity: MovieEntity): Promise<MovieEntity> {
		return this.moviesRepository.save(movieEntity);
	}

	public async moviesForUser(userId: string): Promise<MovieEntity[]> {
		const userWithMovies = await this.usersRepository.findOne(userId, {relations: ["movies"]});
		return userWithMovies.movies;
	}

	public async saveMovieForUser(movieEntity: MovieEntity, userId: string): Promise<MovieEntity[]> {
		const userEntity: UserEntity = await this.usersRepository.findOne(userId);
		const userWithMovies = await this.usersRepository.save(userEntity);
		return userWithMovies.movies;
	}
}

