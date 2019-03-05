import {IsEmail, IsNumber, IsString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';
import {UserEntity} from '../features/users/entities/user-entity';
import * as Bcrypt from 'bcrypt';

export class CreateUserDto {
	@IsEmail()
	@ApiModelProperty()
	userName: string;

	@IsNumber()
	@ApiModelProperty()
	age: number;

	@IsString()
	@ApiModelProperty()
	passWord: string;

	public userEntity(): UserEntity {
		return new UserEntity(this.userName, this.age, Bcrypt.hashSync(this.passWord, 1));
	}
}
