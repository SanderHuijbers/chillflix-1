import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity} from '../../entities/user-entity';
import {UserLoginDto} from '../../dtos/user-login-dto';
import * as Bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
	constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

	public async saveUser(userEntity: UserEntity): Promise<UserEntity> {
		const userExists = !! await this.userRepository.findOne({userName: userEntity.userName});
		if (!userExists) return this.userRepository.save(userEntity);
		else throw new HttpException('User already exists', HttpStatus.CONFLICT);
	}

	public async users(): Promise<UserEntity[]> {
		return await this.userRepository.find();
	}

	public async user(userId: number): Promise<UserEntity> {
		const user = await this.userRepository.findOne(userId);
		if (user) return user;
		else throw new HttpException("user not found", HttpStatus.NOT_FOUND);
	}

	public async deleteUsers(): Promise<void> {
		this.userRepository.clear();
	}

	public async findUserByUserName(userName: string): Promise<UserEntity> {
		const user = await this.userRepository.findOne({where: {userName: userName}});
		if (user) return user;
		else throw new HttpException("user not found", HttpStatus.NOT_FOUND);
	}

	public async userIsValid(userCredentials: UserLoginDto): Promise<boolean> {
		const user = await this.userRepository.findOne({where:{userName: userCredentials.userName}});
		return !!(user && Bcrypt.compare(userCredentials.password, user.password));
	}
}
