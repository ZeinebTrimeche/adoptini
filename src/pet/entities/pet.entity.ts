import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn('uuid')
  public uuid: string;

  public name: string;

  public birthDate?: Date;

  public pictureUrl?: string;

  public ownerUuid?: string;

  public markedForAdoption: boolean;
}
