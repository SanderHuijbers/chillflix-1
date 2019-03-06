import {MovieEntity} from '../../entities/movie-entity';
import {Repository} from "typeorm";
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity} from '../../features/users/entities/user-entity';

@Injectable()
export class MoviesService {
	constructor(@InjectRepository(MovieEntity) private readonly moviesRepository: Repository<MovieEntity>,
	            @InjectRepository(UserEntity) private readonly usersRepository: Repository<UserEntity>) {
	}

	async movies(): Promise<MovieEntity []> {
		return await this.moviesRepository.find();
	}

	async saveMovie(movieEntity: MovieEntity): Promise<MovieEntity> {
		/*assignment 7: save movie if it does not already exists
		* HINT: use imdbId to check*/
		return await this.moviesRepository.findOne();
	}

	public async saveMovieForUser(movieEntity: MovieEntity, userId: string): Promise<MovieEntity[]> {
		const userEntity: UserEntity = await this.usersRepository.findOne(userId, {relations: ["movies"]});
		userEntity.addMovie(movieEntity);
		const userWithMovies = await this.usersRepository.save(userEntity);
		return userWithMovies.movies;
	}

	public async moviesForUser(userId: string): Promise<MovieEntity[]> {
		/*assignment 8: get all movies for given user and if user does not exists thrpw http exception
		* HINT: (4, {relations: ["movies"]})*/
		return await this.moviesRepository.find();
	}
}

