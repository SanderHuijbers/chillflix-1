import {IsEmail, IsString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class UserLoginDto {
	@IsEmail()
	@ApiModelProperty()
	userName: string;

	@IsString()
	@ApiModelProperty()
	password: string;

	constructor(userName: string, passWord: string) {
		this.userName = userName;
		this.password = passWord;
	}
}
