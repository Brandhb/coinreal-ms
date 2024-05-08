const Sequilize = require('sequelize')

module.exports = new Sequilize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: 0,
    define: {
      underscored: true,
      timestamps: true,
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at'
      // defaultScope: {
      //   attributes: { exclude: ['created_at', 'updated_at', 'deleted_at'] }
      // }
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 3000,
      idle: 10000
    }
  }
)
