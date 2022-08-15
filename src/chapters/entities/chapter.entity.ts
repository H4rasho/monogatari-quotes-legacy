import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Season } from 'src/seasons/entities/season.entity';

@Table({
  tableName: 'Chapters',
  timestamps: true,
})
export class Chapter extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    comment: 'Chapter ID',
  })
  id: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    comment: 'Chapter name',
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'Chapter number',
  })
  number: number;

  @ForeignKey(() => Season)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    comment: 'Season ID',
  })
  seasonId: string;

  @BelongsTo(() => Season, {
    foreignKey: 'seasonId',
    as: 'season',
  })
  season: Season;
}
