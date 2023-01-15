import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetAdoptionSercice {
  constructor(
    @InjectRepository(Pet)
    private petRepo: Repository<Pet>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(petId: string, userEmail: string) {
    const pet = await this.petRepo.findOneOrFail({ where: { uuid: petId } });
    const user = await this.userRepo.findOneOrFail({
      where: { email: userEmail },
    });
    user.adoptedPets.push(pet);
    return this.userRepo.save(user);
  }
}
