import { Pet } from 'src/pet/entities/pet.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public uuid: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public hashedPassword: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public birthDate: Date;

  @Column({ nullable: true })
  public pictureUrl?: string;

  @OneToMany(() => Pet, (pet) => pet.ownerUuid)
  public adoptedPets?: Pet[];
}
