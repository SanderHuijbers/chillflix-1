import {Movie} from '../../models/movie';
import {MovieEntity} from '../../entities/movie-entity';
import {Repository} from "typeorm";
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {CreateMovieDto} from '../../dtos/create-movie-dto';

@Injectable()
export class MovieService {
	constructor(@InjectRepository(MovieEntity) private readonly movieRepository: Repository<MovieEntity>) {
	}

	async getMovies(): Promise<Movie []> {
		const moviesEntities = await this.movieRepository.find();
		return moviesEntities.map(movieEntity => movieEntity.movie());
	}

	async saveEntity(movieEntity: MovieEntity): Promise<MovieEntity> {
		return this.movieRepository.save(movieEntity);
	}
}

