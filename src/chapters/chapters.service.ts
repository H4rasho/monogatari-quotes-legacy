import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Season } from 'src/seasons/entities/season.entity';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { Chapter } from './entities/chapter.entity';

@Injectable()
export class ChaptersService {
  constructor(
    @InjectModel(Chapter)
    private readonly chapterModel: typeof Chapter,
  ) {}

  async create(createChapterDto: CreateChapterDto) {
    return await this.chapterModel.create({ ...createChapterDto });
  }

  async findAll() {
    return await this.chapterModel.findAll({
      include: [{ model: Season }],
    });
  }

  async findOne(id: string) {
    return await this.chapterModel.findByPk(id, {
      include: [{ model: Season }],
    });
  }

  async update(id: string, updateChapterDto: UpdateChapterDto) {
    return await this.chapterModel.update(updateChapterDto, {
      where: { id },
    });
  }

  async remove(id: string) {
    return await this.chapterModel.destroy({ where: { id } });
  }
}
