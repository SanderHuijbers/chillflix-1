import {Module, NestModule, MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserEntity} from './entities/user-entity';
import {UsersService} from './services/users/users.service';
import {AuthService} from './services/authentication/auth.service';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import {UsersModuleConf} from './users.module.conf';
import {AuthController} from './controllers/auth/auth.controller';
import {JwtStrategyService} from './services/jwt-strategy/jwt-strategy.service';
import {CookieParserMiddleware} from '@nest-middlewares/cookie-parser';
import {CsurfMiddleware} from '@nest-middlewares/csurf';


@Module({
	imports: [
		TypeOrmModule.forFeature([UserEntity]),
		PassportModule.register({defaultStrategy: 'jwt', session: true}),
		JwtModule.register({
			secretOrPrivateKey: UsersModuleConf.jwtSecret,
			signOptions: {
				expiresIn: UsersModuleConf.jwtValidDuration,
			},
		}),
	],
	exports: [UsersService, JwtStrategyService],
	controllers: [AuthController],
	providers: [UsersService, AuthService, JwtStrategyService]
})
export class UsersModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			// .apply(CookieParserMiddleware).forRoutes({path: '*', method: RequestMethod.ALL})
			// .apply(CsurfMiddleware).forRoutes({path: '**', method: RequestMethod.ALL})
	}
}
