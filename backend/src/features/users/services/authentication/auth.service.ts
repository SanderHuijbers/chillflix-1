import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import {JwtPayload} from '../../interfaces/jwt-payload';
import {UserLoginDto} from '../../dtos/user-login-dto';
import {TokenResponse} from '../../models/token-response.model';

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private readonly jwtService: JwtService,
	) {
	}

	async signIn(userLoginDto: UserLoginDto): Promise<TokenResponse> {
		const userExists: boolean = !!await this.usersService.userIsValid(userLoginDto);
		if (userExists) return new TokenResponse(
			this.jwtService.sign({
				email: userLoginDto.userName,
				duration: 3600,
				role: 'admin'
			}),
			userLoginDto.userName
		);

		else throw new HttpException("invalid credentials", HttpStatus.UNAUTHORIZED);
	}

	async validateUser(jwtPayload: JwtPayload): Promise<any> {
		return await this.usersService.findUserByUserName(jwtPayload.email);
	}
}
