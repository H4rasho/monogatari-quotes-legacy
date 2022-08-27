import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'User',
  timestamps: true,
})
export class User extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
    comment: 'Id of the User',
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: 'Username of the user',
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: 'Password of the User',
  })
  password: string;
}
