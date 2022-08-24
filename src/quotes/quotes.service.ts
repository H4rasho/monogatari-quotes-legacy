import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Chapter } from 'src/chapters/entities/chapter.entity';
import { Character } from 'src/characters/entities/character.entity';
import { Season } from 'src/seasons/entities/season.entity';
import { QuotesArgs } from './dto/args-quote';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { Quote } from './entities/quote.entity';

@Injectable()
export class QuotesService {
  constructor(
    @InjectModel(Quote)
    private readonly quoteModel: typeof Quote,
  ) {}

  async create(createQuoteDto: CreateQuoteDto) {
    return await this.quoteModel.create({ ...createQuoteDto });
  }

  async findAll({ offset, limit }: QuotesArgs) {
    console.log(limit);
    return await this.quoteModel.findAll({
      include: [Character, { model: Chapter, include: [Season] }],
      offset,
      limit,
    });
  }

  async findOne(id: string) {
    return await this.quoteModel.findByPk(id, {
      attributes: ['id', 'quote', 'image'],
      include: [Character, { model: Chapter, include: [Season] }],
    });
  }

  async update(id: string, updateQuoteDto: UpdateQuoteDto) {
    return await this.quoteModel.update(updateQuoteDto, {
      where: { id },
    });
  }

  async remove(id: string) {
    return await this.quoteModel.destroy({ where: { id } });
  }
}
