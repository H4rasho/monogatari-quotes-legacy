import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize/types';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB } from './config';
import { CharactersModule } from './characters/characters.module';
import { SeasonsModule } from './seasons/seasons.module';
import { ChaptersModule } from './chapters/chapters.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: DB.DIALECT as Dialect,
      host: DB.HOST,
      port: Number(DB.PORT),
      username: DB.USER,
      password: DB.PASS,
      database: DB.NAME,
      autoLoadModels: true,
    }),
    CharactersModule,
    SeasonsModule,
    ChaptersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
