import {IsEmail, IsNumber, IsString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';
import {UserEntity} from '../features/users/entities/user-entity';
import * as Bcrypt from 'bcrypt';
import {ICreateUser} from '../../../shared/interfaces/create-user.interface';

export class CreateUserDto implements ICreateUser{
	@IsEmail()
	@ApiModelProperty()
	userName: string;

	@IsNumber()
	@ApiModelProperty()
	age: number;

	@IsString()
	@ApiModelProperty()
	password: string;

	constructor(userName: string, age: number, passWord: string) {
		this.userName = userName;
		this.age = age;
		this.password = passWord;
	}

	public userEntity(): UserEntity {
		return new UserEntity(this.userName, this.age, Bcrypt.hashSync(this.password, 1));
	}
}
