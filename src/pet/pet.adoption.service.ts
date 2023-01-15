import { Injectable, UnauthorizedException } from '@nestjs/common';
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
    const pet = await this.petRepo.findOneOrFail({
      where: { uuid: petId },
      relations: ['owner'],
    });
    if (pet.owner) throw new UnauthorizedException('Pet is already adopted');

    const user = await this.userRepo.findOneOrFail({
      where: { email: userEmail },
    });
    pet.owner = user;
    console.log(user);

    return this.petRepo.save(pet);
  }

  async remove(petId: string) {
    const pet = await this.petRepo.findOneOrFail({
      where: { uuid: petId },
      relations: ['owner'],
    });

    pet.owner = null;
    pet.markedForAdoption = true;

    return this.petRepo.save(pet);
  }
}
