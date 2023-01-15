import {
  IsDateString,
  IsEmail,
  IsString,
  MaxLength,
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
  @MaxLength(15)
  public firstName: string;

  @Column()
  @IsString()
  @MinLength(2)
  @MaxLength(15)
  public lastName: string;

  @Column()
  @IsDateString()
  public birthDate: Date;

  @Column({ nullable: true })
  public pictureUrl?: string;

  @OneToMany(() => Pet, (pet) => pet.owner, { cascade: true })
  public adoptedPets?: Pet[];
}
