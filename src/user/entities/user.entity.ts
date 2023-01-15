import {
  IsDateString,
  IsEmail,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';
import { Pet } from 'src/pet/entities/pet.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public uuid: string;

  @Column({ unique: true })
  @IsEmail()
  public email: string;

  @Column()
  public hashedPassword: string;

  @Column()
  @IsString()
  @MinLength(2)
  public firstName: string;

  @Column()
  @IsString()
  @MinLength(2)
  public lastName: string;

  @Column()
  @IsDateString()
  public birthDate: Date;

  @Column({ nullable: true })
  @IsUrl()
  public pictureUrl?: string;

  @OneToMany(() => Pet, (pet) => pet.owner)
  public adoptedPets?: Pet[];
}
