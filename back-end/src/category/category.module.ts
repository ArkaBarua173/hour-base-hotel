import { RoomModule } from './../room/room.module';
import { Module, forwardRef } from '@nestjs/common';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryEntity } from './category.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryEntity]),
    MulterModule.register({
      dest: './upload',
    }),
    forwardRef(() => RoomModule),
  ],
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [CategoryService],
})
export class CategoryModule {}
