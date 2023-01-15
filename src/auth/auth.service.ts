import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

const hash = (password: string) => password;

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;

    if (email && user.hashedPassword === hash(password)) return user;

    return null;
  }
}
