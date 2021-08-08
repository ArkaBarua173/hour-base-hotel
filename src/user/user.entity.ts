import { BookingEntity } from './../booking/booking.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from './user.role.enum';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ unique: true, length: 10, nullable: true })
  mobile: string;

  @OneToMany(() => BookingEntity, (bookingEntity) => bookingEntity.user)
  bookings: BookingEntity[];

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;
}
