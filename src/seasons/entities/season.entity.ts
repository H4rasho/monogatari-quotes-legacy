import { Column, DataType, Model, Table } from 'sequelize-typescript';

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
}
