import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB } from './config';
import { CharactersModule } from './characters/characters.module';
import { SeasonsModule } from './seasons/seasons.module';
import { ChaptersModule } from './chapters/chapters.module';
import { QuotesModule } from './quotes/quotes.module';
import { UserModule } from './user/user.module';
import { RolModule } from './rol/rol.module';
import { AuthModule } from './auth/auth.module';
import {APP_GUARD} from '@nestjs/core';
import {JwtAuthGuard} from './auth/jwt-auth.guard';

@Module({
  imports: [
    SequelizeModule.forRoot({
      uri: DB.URI,
      autoLoadModels: true,
    }),
    CharactersModule,
    SeasonsModule,
    ChaptersModule,
    QuotesModule,
    UserModule,
    RolModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }],
}) 
export class AppModule {}
