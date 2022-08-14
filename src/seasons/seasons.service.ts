import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';
import { Season } from './entities/season.entity';

@Injectable()
export class SeasonsService {
  constructor(
    @InjectModel(Season)
    private seasonModel: typeof Season,
  ) {}

  create(createSeasonDto: CreateSeasonDto) {
    return this.seasonModel.create({ ...createSeasonDto });
  }

  async findAll() {
    return await this.seasonModel.findAll();
  }

  findOne(id: string) {
    return this.seasonModel.findByPk(id);
  }

  update(id: string, updateSeasonDto: UpdateSeasonDto) {
    return this.seasonModel.update(updateSeasonDto, { where: { id } });
  }

  remove(id: string) {
    return this.seasonModel.destroy({ where: { id } });
  }
}
