import {Module} from '@nestjs/common';
import {UsersService} from './services/users/users.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserEntity} from './entities/user-entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([UserEntity])
	],
	exports: [UsersService],
	providers: [UsersService]
})
export class UsersModule {
}
