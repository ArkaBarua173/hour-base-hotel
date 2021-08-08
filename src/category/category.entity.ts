import { RoomEntity } from './../room/room.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'simple-array' })
  services: string[];

  @Column()
  price: number;

  @Column()
  maxPeople: number;

  @OneToMany(() => RoomEntity, (roomEntity) => roomEntity.category)
  rooms: RoomEntity[];
  // @Column({type: ''} )
  // rooms: Room[];
}
