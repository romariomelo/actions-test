import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    private readonly config: ConfigService,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getHello(): Promise<User[]> {
    return this.userRepository.find();
  }
}
