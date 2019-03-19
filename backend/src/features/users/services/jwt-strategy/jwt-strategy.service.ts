import {Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthService} from '../authentication/auth.service';
import {JwtPayload} from '../../interfaces/jwt-payload';
import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {UsersModuleConf} from '../../users.module.conf';
import {Request} from "express"


@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
	constructor(private readonly authService: AuthService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //.fromExtractors([JwtStrategyService.cookieExtractor, ]),
			secretOrKey: UsersModuleConf.jwtSecret,
		});
	}

	private static cookieExtractor(req: Request) {
		var token = null;
		if (req && req.cookies) token = req.cookies[UsersModuleConf.jwtCookieKey];
		return token;
	};

	async validate(payload: JwtPayload) {
		const user = await this.authService.validateUser(payload);
		if (!user) throw new UnauthorizedException();
		else return payload;
	}
}
