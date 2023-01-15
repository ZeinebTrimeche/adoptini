import {
  IsBoolean,
  IsDateString,
  IsEmpty,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  IsNull,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn('uuid')
  public uuid: string;

  @Column()
  @IsString()
  @MinLength(3)
  public name: string;

  @Column()
  @IsString()
  public breed: string;

  @Column()
  @IsDateString()
  public birthDate?: Date;

  @Column({ nullable: true })
  @IsUrl()
  public pictureUrl?: string;

  @ManyToOne(() => User, (user) => user.adoptedPets)
  public owner?: User;

  @Column()
  @IsBoolean()
  public markedForAdoption?: boolean;
}
