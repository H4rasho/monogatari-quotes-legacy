import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize/types';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB } from './config';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: DB.DIALECT as Dialect,
      host: DB.HOST,
      port: DB.PORT as number,
      username: DB.USER,
      password: DB.PASS,
      database: DB.NAME,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
