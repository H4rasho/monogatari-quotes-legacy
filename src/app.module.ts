import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB } from './config';
import { CharactersModule } from './characters/characters.module';
import { SeasonsModule } from './seasons/seasons.module';
import { ChaptersModule } from './chapters/chapters.module';
import { QuotesModule } from './quotes/quotes.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
