import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Character',
  timestamps: true,
})
export class Character extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
    comment: 'The unique id of the character',
  })
  id: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
    comment: 'The name of the character',
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    comment: 'The description of the character',
  })
  description?: string;

  @Column({
    type: DataType.STRING(100),
    comment: 'The image of the character',
  })
  avatar?: string;
}
