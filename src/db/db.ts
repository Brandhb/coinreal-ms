{/*
  // const Sequilize = require('sequelize')

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
) */}

import { PrismaClient } from '@prisma/client'
import "server-only"

declare global {
  // eslint-disable-next-line no-var, no-unused-vars
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma
