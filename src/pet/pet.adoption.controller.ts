import { PetAdoptionSercice } from './pet.adoption.service';
import { Controller, Body, Post } from '@nestjs/common';

@Controller('pet/adoption')
export class PetAdoptionContoller {
  constructor(private readonly petAdoptionSercice: PetAdoptionSercice) {}

  @Post()
  create(@Body() createAdoption: { userEmail: string; petId: string }) {
    return this.petAdoptionSercice.create(
      createAdoption.petId,
      createAdoption.userEmail,
    );
  }

  // update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
  //   return this.petService.update(id, updatePetDto);
  // }

  // remove(@Param('id') id: { userEmail: string; petId: string }) {
  //   return this.petAdoptionSercice.remove(id);
  // }
}
