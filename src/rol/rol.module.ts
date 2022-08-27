import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Rol } from './entities/rol.entity';

@Module({
  imports: [SequelizeModule.forFeature([Rol])],
})
export class RolModule {}
