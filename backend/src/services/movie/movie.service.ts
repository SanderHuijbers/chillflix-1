import {MovieEntity} from '../../entities/movie-entity';
import {Repository} from "typeorm";
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class MovieService {
	constructor(@InjectRepository(MovieEntity) private readonly movieRepository: Repository<MovieEntity>) {
	}

	async movies(): Promise<MovieEntity []> {
		return await this.movieRepository.find();
	}

	async saveUser(movieEntity: MovieEntity): Promise<MovieEntity> {
		return this.movieRepository.save(movieEntity);
	}
}

