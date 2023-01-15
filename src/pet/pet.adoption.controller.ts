import { PetAdoptionSercice } from './pet.adoption.service';
import { Controller, Body, Post, Param, Delete } from '@nestjs/common';

@Controller('pet/adoption')
export class PetAdoptionContoller {
  constructor(private readonly petAdoptionSercice: PetAdoptionSercice) {}

  @Post(':petuuid')
  create(
    @Param('petuuid') petId: string,
    @Body() createAdoption: { userEmail: string },
  ) {
    return this.petAdoptionSercice.create(petId, createAdoption.userEmail);
  }

  @Delete(':petuuid')
  remove(@Param(':petuuid') id: string) {
    return this.petAdoptionSercice.remove(id);
  }
}
