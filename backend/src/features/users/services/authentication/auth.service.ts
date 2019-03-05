import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import {JwtPayload} from '../../interfaces/jwt-payload';
import {UserLoginDto} from '../../dtos/user-login-dto';


@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private readonly jwtService: JwtService,
	) {
	}

	async signIn(userLoginDto: UserLoginDto): Promise<string | HttpException> {
		const userExists: boolean = !!await this.usersService.findUserByCredentials(userLoginDto);
		if (userExists) {
			const user: JwtPayload = {email: userLoginDto.userName};
			return this.jwtService.sign(user);
		} else {
			return new HttpException("invalid credentials", HttpStatus.UNAUTHORIZED);
		}
	}

	async validateUser(jwtPayload: JwtPayload): Promise<any> {
		return await this.usersService.findUserByUserName(jwtPayload.email);
	}
}
