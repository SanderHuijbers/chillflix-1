import {Body, Controller, Post} from '@nestjs/common';
import {CreateUserDto} from '../../dtos/create-user-dto';
import {UsersService} from '../../features/users/services/users/users.service';

@Controller('users')
export class UsersController {

	constructor(private readonly usersService: UsersService) {
	}

	@Post()
	testDto(@Body() createUserDto: CreateUserDto) {
		return this.usersService.saveUser(createUserDto.userEntity());
	}
}
