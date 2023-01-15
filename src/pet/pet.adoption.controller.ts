import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pet/adoption')
export class PetAdoptionContoller {
  constructor(private readonly petService: PetService) {}

  create(@Body() createPetDto: CreatePetDto) {
    return this.petService.create(createPetDto);
  }

  findAll() {
    return this.petService.findAll();
  }

  findOne(@Param('id') id: string) {
    return this.petService.findOne(+id);
  }

  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petService.update(+id, updatePetDto);
  }

  remove(@Param('id') id: string) {
    return this.petService.remove(+id);
  }
}
