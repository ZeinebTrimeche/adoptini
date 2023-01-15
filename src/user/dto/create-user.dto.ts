import { PickType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entity';

export class CreateUserDto extends PickType(User, [
  'email',
  'firstName',
  'lastName',
  'birthDate',
] as const) {
  public password: string;
}
