import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'This email address is invalid' })
	email: string;

	@IsString({ message: 'This password is invalid' })
	password: string;

	@IsString({ message: 'This name is invalid' })
	name: string;
}
