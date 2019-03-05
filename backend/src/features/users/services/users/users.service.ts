import {Injectable} from '@nestjs/common';
import {CreateUserDto} from '../../../../dtos/create-user-dto';
import {UserEntity} from '../../entities/user-entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class UsersService {
	constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {
	}

	saveUser(userEntity: UserEntity) {
		this.userRepository.save(userEntity)
	}
}
