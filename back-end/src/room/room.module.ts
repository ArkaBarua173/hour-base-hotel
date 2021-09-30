import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { RoomEntity } from './room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoomEntity])],
  providers: [RoomService],
  controllers: [RoomController],
})
export class RoomModule {}