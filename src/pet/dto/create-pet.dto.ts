import { OmitType } from '@nestjs/mapped-types';
import { Pet } from '../entities/pet.entity';

export class CreatePetDto extends OmitType(Pet, [
  'uuid',
  'markedForAdoption',
  'pictureUrl',
] as const) {}
