import {HttpModule, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MovieController} from './controllers/movie/movie.controller';
import {MovieService} from './services/movie/movie.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MovieEntity} from './entities/movie-entity';
import {OmdbProxyService} from './services/omdb-proxy/omdb-proxy.service';
import {UsersController} from './controllers/users/users.controller';
import {UsersModule} from './features/users/users.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: 'root',
			database: 'chillflix',
			entities: [__dirname + '/**/*-entity{.ts,.js}'],
			synchronize: true,
			logging: true
		}),
		TypeOrmModule.forFeature([MovieEntity]),
		HttpModule.register({
			timeout: 5000,
			maxRedirects: 5,
		}),
		UsersModule,
	],
	controllers: [AppController, MovieController, UsersController],
	providers: [AppService, MovieService, OmdbProxyService],
})
export class AppModule {
}
