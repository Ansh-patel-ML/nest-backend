import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserRole } from '../types';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['ADMIN', 'INTERN', 'ENGINEER'], {
    message: 'Valid role required.',
  })
  role: UserRole;
}
