import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

import * as bcrypt from 'bcrypt';

const salt = process.env.PASSWORD_SALT;
const hash = (password: string) => bcrypt.hash(password, salt);

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;

    if (email && user.hashedPassword === (await hash(password))) return user;

    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.uuid };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
