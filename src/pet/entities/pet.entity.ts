import {
  IsBoolean,
  IsDateString,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn('uuid')
  public uuid: string;

  @Column()
  @IsString()
  @MinLength(3)
  public name: string;

  @Column()
  @IsDateString()
  public birthDate?: Date;

  @Column()
  @IsUrl()
  public pictureUrl?: string;

  @Column()
  public ownerUuid?: string;

  @Column()
  @IsBoolean()
  public markedForAdoption = false;
}
