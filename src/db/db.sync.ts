require('module-alias/register')
const db = require('./db.js')
const fs = require('fs')

const sync = async () => {
  const repositories = require('path').join(__dirname, 'core/repositories')
  fs.readdirSync(repositories).forEach((file: any) => {
    require(`${repositories}/${file}`)
  })

  await db.sync({ alter: true })
  console.log('Синхронизация выполнена!')
}
sync()
