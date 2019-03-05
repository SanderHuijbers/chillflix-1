import {Body, Controller, Delete, Get, Param, Post, Req, UseGuards} from '@nestjs/common';
import {CreateUserDto} from '../../dtos/create-user-dto';
import {UsersService} from '../../features/users/services/users/users.service';
import {User} from '../../models/user';
import {ApiUseTags} from '@nestjs/swagger';
import {AuthGuard} from '@nestjs/passport';
import {JwtPayloadDecorator} from '../../features/decorators/jwt-payload-decorator';
import {JwtPayload} from '../../features/users/interfaces/jwt-payload';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {
	}

	@Post()
	saveUser(@Body() createUserDto: CreateUserDto) {
		return this.usersService.saveUser(createUserDto.userEntity());
	}

	@Get()
	@UseGuards(AuthGuard())
	async users(@Req() req, @JwtPayloadDecorator() jwtPayload: JwtPayload): Promise<User[]> {
		console.log(jwtPayload);
		const userEntities = await this.usersService.users();
		return userEntities.map(userEntity => User.fromUserEntity(userEntity))
	}

	@Get(':userid')
	//@UseGuards(AuthGuard())
	async user(@Req() req,@Param('userid') userId: number): Promise<User> {
		const userEntity = await this.usersService.user(userId);
		return User.fromUserEntity(userEntity);
	}

	@Delete()
	deleteUser() {
		return this.usersService.deleteUsers();
	}
}
