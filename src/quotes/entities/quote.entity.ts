import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Chapter } from 'src/chapters/entities/chapter.entity';
import { Character } from 'src/characters/entities/character.entity';

@Table({
  tableName: 'Quote',
  timestamps: true,
})
export class Quote extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    comment: 'The unique id of the quote',
  })
  id: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    comment: 'The text of the quote',
  })
  quote: string;

  @Column({
    type: DataType.TEXT,
    comment: 'The image of the quote',
  })
  image?: string;

  @ForeignKey(() => Character)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    comment: 'The id of the character',
  })
  characterId: string;

  @BelongsTo(() => Character, {
    foreignKey: 'characterId',
    as: 'author',
  })
  author: Character;

  @ForeignKey(() => Chapter)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    comment: 'The id of the chapter',
  })
  chapterId: string;

  @BelongsTo(() => Chapter, {
    foreignKey: 'chapterId',
    as: 'episode',
  })
  episode: Chapter;
}
