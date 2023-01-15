import {
  IsBoolean,
  IsDateString,
  IsString,
  IsUrl,
  MaxLength,
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
  @MaxLength(15)
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
