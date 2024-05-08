import { DataTypes, Model } from 'sequelize';
const db = require('@/db/db');

import transactionRepository from '@/repositories/transactions.repository';

interface ClientAttributes {
  client_id?: number;
  email: string;
  last_activity: Date;
}

class Client extends Model<ClientAttributes> implements ClientAttributes {
  public client_id!: number;
  public email!: string;
  public last_activity!: Date;
}

Client.init(
  {
    client_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: 'ID',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Почта (логин)',
    },
    last_activity: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'Дата последней активности',
    },
  },
  {
    sequelize: db,
    modelName: 'clients',
  }
);

Client.hasMany(transactionRepository, {
  foreignKey: 'client_id',
  sourceKey: 'client_id',
  as: 'transactions',
  constraints: false,
});
transactionRepository.hasOne(Client, {
  foreignKey: 'client_id',
  sourceKey: 'client_id',
  as: 'client',
  constraints: false,
});

export default Client;
