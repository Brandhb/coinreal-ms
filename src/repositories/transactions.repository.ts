import { DataTypes, Model } from 'sequelize';
const db = require('@/db/db');

interface TransactionAttributes {
  transaction_id: number;
  client_id: number;
  type: string;
  aud: number;
  btc: number;
  bitcoin_address?: string | null;
  bsb?: string | null;
  account_number?: string | null;
}

class Transaction extends Model<TransactionAttributes> implements TransactionAttributes {
  public transaction_id!: number;
  public client_id!: number;
  public type!: string;
  public aud!: number;
  public btc!: number;
  public bitcoin_address!: string | null;
  public bsb!: string | null;
  public account_number!: string | null;
}

Transaction.init(
  {
    transaction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: 'ID',
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'ID клиента',
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Тип транзакции (sell/buy)',
    },
    aud: {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: 'Австралийский доллар',
    },
    btc: {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: 'Биткоины',
    },
    bitcoin_address: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Биткоин адрес (для buy)',
    },
    bsb: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'BSB (для sell)',
    },
    account_number: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Номер аккаунта (для sell)',
    },
  },
  {
    sequelize: db,
    modelName: 'transactions',
  }
);

export default Transaction;
