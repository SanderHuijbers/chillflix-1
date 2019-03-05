import {HttpModule, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MovieController} from './controllers/movie/movie.controller';
import {MoviesService} from './services/movie/movies.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MovieEntity} from './entities/movie-entity';
import {UsersController} from './controllers/users/users.controller';
import {UsersModule} from './features/users/users.module';
import {OmdbProxyService} from './services/omdb-proxy/omdb-proxy.service';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: 'root',
			database: 'chillflix-maurice',
			entities: [__dirname + '/**/*-entity{.ts,.js}'],
			synchronize: true,
			logging: false
		}),
		TypeOrmModule.forFeature([MovieEntity]),
		HttpModule,
		UsersModule
	],
	controllers: [AppController, MovieController, UsersController],
	providers: [AppService, MoviesService, OmdbProxyService],
})
export class AppModule {
}
