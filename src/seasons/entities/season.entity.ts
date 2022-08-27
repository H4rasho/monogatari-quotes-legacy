import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Chapter } from 'src/chapters/entities/chapter.entity';

@Table({
  tableName: 'Seasons',
  timestamps: true,
})
export class Season extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    comment: 'Season ID',
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: 'Season name',
    unique: true,
  })
  name: string;

  @HasMany(() => Chapter, {
    foreignKey: 'seasonId',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  chapters: Chapter[];
}
