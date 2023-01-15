import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    return this.petService.create(createPetDto);
  }

  @Get()
  findAll() {
    return this.petService.findAll();
  }

  @Get('user/:uuid')
  findByUser(@Param('uuid') uuid: string) {
    try {
      return this.petService.findByUser(uuid);
    } catch {
      throw new HttpException('Bad request', HttpStatus.NOT_FOUND);
    }
  }

  @Get(':uuid')
  async findOne(@Param('uuid') uuid: string) {
    try {
      const result = await this.petService.findOne(uuid);
      return result;
    } catch {
      throw new NotFoundException();
    }
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petService.update(uuid, updatePetDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.petService.remove(uuid);
  }
}
