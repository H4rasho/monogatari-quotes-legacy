import { Module } from '@nestjs/common';
import { ChaptersService } from './chapters.service';
import { ChaptersController } from './chapters.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Chapter } from './entities/chapter.entity';

@Module({
  imports: [SequelizeModule.forFeature([Chapter])],
  controllers: [ChaptersController],
  providers: [ChaptersService],
})
export class ChaptersModule {}
