import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {User} from '../../../models/user';

@Entity("user")
export class UserEntity {
	@PrimaryGeneratedColumn() public readonly id?: number;
	@Column('varchar', {unique: true}) public readonly userName: string;
	@Column('integer') public readonly age: number;
	@Column('varchar') public readonly password: string;

	constructor(userName: string, age: number, password: string) {
		this.userName = userName;
		this.age = age;
		this.password = password;
	}

	public user(): User {
		return new User(this.id, this.userName, this.age);
	}
}
