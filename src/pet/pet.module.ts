import { PetAdoptionSercice } from './pet.adoption.service';
import { PetAdoptionContoller } from './pet.adoption.controller';
import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet, User])],
  controllers: [PetController, PetAdoptionContoller],
  providers: [PetService, PetAdoptionSercice],
})
export class PetModule {}
