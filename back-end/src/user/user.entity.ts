import { BookingEntity } from './../booking/booking.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './user.role.enum';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ unique: true })
  mobile: string;

  @OneToMany(() => BookingEntity, (bookingEntity) => bookingEntity.user, {
    lazy: true,
    nullable: true,
  })
  bookings: BookingEntity[];

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  roles: Role[];
}
