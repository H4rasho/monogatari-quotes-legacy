import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';

@Injectable()
export class CharactersService {
  constructor(
    @InjectModel(Character)
    private characterModel: typeof Character,
  ) {}

  create(createCharacterDto: CreateCharacterDto) {
    return this.characterModel.create({
      ...createCharacterDto,
    });
  }

  async findAll(): Promise<Character[]> {
    return await this.characterModel.findAll();
  }

  async findOne(id: string) {
    return await this.characterModel.findByPk(id);
  }

  async update(id: string, updateCharacterDto: UpdateCharacterDto) {
    return await this.characterModel.update(updateCharacterDto, {
      where: { id },
    });
  }

  remove(id: string) {
    return this.characterModel.destroy({ where: { id } });
  }
}
