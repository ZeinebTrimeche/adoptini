import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petRepo: Repository<Pet>,
  ) {}
  create(createPetDto: CreatePetDto) {
    return this.petRepo.save(createPetDto);
  }

  findAll() {
    return this.petRepo.find();
  }

  findOne(uuid: string) {
    return this.petRepo.findOneByOrFail({ uuid });
  }

  findByUser(uuid: string) {
    return this.petRepo.find({ where: { owner: { uuid } } });
  }

  update(uuid: string, updatePetDto: UpdatePetDto) {
    return this.petRepo.update({ uuid }, updatePetDto);
  }

  remove(uuid: string) {
    return this.petRepo.delete({ uuid });
  }
}
