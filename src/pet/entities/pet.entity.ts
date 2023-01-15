import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn('uuid')
  public uuid: string;

  @Column()
  public name: string;

  @Column()
  public birthDate?: Date;

  @Column()
  public pictureUrl?: string;

  @Column()
  public ownerUuid?: string;

  @Column()
  public markedForAdoption: boolean;
}
