import { Pet } from 'src/pet/entities/pet.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public uuid: string;

  public email: string;

  public hashedPassword: string;

  public salt: string;

  public firstName: string;

  public lastName: string;

  public birthDate: Date;

  public pictureUrl: string;

  // public ownedPets: string[];

  @OneToMany(() => Pet, (pet) => pet.ownerUuid)
  public adoptedPets: Pet[];

  // public roles: string;
}
