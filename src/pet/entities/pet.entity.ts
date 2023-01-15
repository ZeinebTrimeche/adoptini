import {
  IsBoolean,
  IsDateString,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => User, (user) => user.adoptedPets)
  public owner?: User;

  @Column()
  @IsBoolean()
  public markedForAdoption?: boolean;
}
