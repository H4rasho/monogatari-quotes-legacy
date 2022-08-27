import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Rol',
  timestamps: true,
})
export class Rol extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
    comment: 'Id of the Rol',
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: 'Name of the Rol',
  })
  label: string;
}
