import {Body, Controller, Delete, Get, Param, Post, Req, UseGuards} from '@nestjs/common';
import {CreateUserDto} from '../../dtos/create-user-dto';
import {UsersService} from '../../features/users/services/users/users.service';
import {User} from '../../models/user';
import {ApiUseTags} from '@nestjs/swagger';
import {AuthGuard} from '@nestjs/passport';
import {JwtPayloadDecorator} from '../../features/decorators/jwt-payload-decorator';
import {JwtPayload} from '../../features/users/interfaces/jwt-payload';
import {MoviesService} from '../../services/movie/movies.service';
import {CreateMovieDto} from '../../dtos/create-movie-dto';
import {MovieEntity} from '../../entities/movie-entity';
import {Movie} from '../../models/movie';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService,
	            private readonly moviesService: MoviesService) {
	}

	@Post()
	saveUser(@Body() createUserDto: CreateUserDto) {
		return this.usersService.saveUser(createUserDto.userEntity());
	}

	@Get()
	async users(@JwtPayloadDecorator() jwtPayload: JwtPayload): Promise<User[]> {
		const userEntities = (await this.usersService.users()) || [];
		return userEntities.map(userEntity => User.fromUserEntity(userEntity))
	}

	@Get(':userid')
	async user(@Req() req: any, @Param('userid') userId: number): Promise<User> {
		const userEntity = await this.usersService.user(userId);
		return User.fromUserEntity(userEntity);
	}

	@Delete()
	deleteUser() {
		return this.usersService.deleteUsers();
	}

	@Get(':userId/movies')
	public async saveMoviesForUser(@Param('userId') userId: string): Promise<Movie[]> {
		const movieEntities = await this.moviesService.moviesForUser(userId);
		return movieEntities.map(movieEntity => Movie.fromMovieEntity(movieEntity))
	}

	@Post(':userId/movies')
	public async listSavedMoviesFromUser(@Body() createMovieDto: CreateMovieDto, @Param('userId') userId: string): Promise<MovieEntity[]> {
		return this.moviesService.saveMovieForUser(createMovieDto.movieEntity(), userId);
	}
}
