import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity} from '../../entities/user-entity';
import {UserLoginDto} from '../../dtos/user-login-dto';

@Injectable()
export class UsersService {
	constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

	public async saveUser(userEntity: UserEntity): Promise<UserEntity> {
		const existingUsers = await this.userRepository.findOne({where: {userName: userEntity.userName}});
		if (existingUsers) return this.userRepository.save(userEntity);
		else throw new HttpException('User already exists', HttpStatus.CONFLICT)
	}

	public async users(): Promise<UserEntity[]> {
		return await this.userRepository.find();
	}

	public async user(userId: string): Promise<UserEntity> {
		return await this.userRepository.findOne(userId);
	}

	public async deleteUsers(): Promise<void> {
		return await this.userRepository.clear();
	}

	public findUserByCredentials(userCredentials: UserLoginDto) {
		return this.userRepository.find({
			where: {userName: userCredentials.userName, password: userCredentials.passWord}
		})
	}

	public findUserByUserName(userName: string): Promise<UserEntity[]> {
		return this.userRepository.find({where: {userName: userName}})
	}
}
