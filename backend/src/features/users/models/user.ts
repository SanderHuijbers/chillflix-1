import {UserEntity} from '../entities/user-entity';

export class User {
	constructor(public readonly id: number,
	            public readonly userName: string,
	            public readonly age: number) {
	}

	public static fromMovieEntity(userEntity: UserEntity) {
		return new User(userEntity.id, userEntity.userName, userEntity.age);
	}
}
