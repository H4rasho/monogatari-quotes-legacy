import { Module } from '@nestjs/common';
import { SeasonsService } from './seasons.service';
import { SeasonsController } from './seasons.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Season } from './entities/season.entity';

@Module({
  imports: [SequelizeModule.forFeature([Season])],
  controllers: [SeasonsController],
  providers: [SeasonsService],
})
export class SeasonsModule {}
