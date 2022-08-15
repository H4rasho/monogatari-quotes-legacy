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
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    comment: 'Season description',
  })
  synopsis?: string;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
    comment: 'Season start date',
  })
  releaseDate: Date;

  @HasMany(() => Chapter, {
    foreignKey: 'seasonId',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  chapters: Chapter[];
}
