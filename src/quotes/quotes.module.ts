import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Quote } from './entities/quote.entity';

@Module({
  imports: [SequelizeModule.forFeature([Quote])],
  controllers: [QuotesController],
  providers: [QuotesService],
})
export class QuotesModule {}
