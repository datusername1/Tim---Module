const Sequelize = require('sequelize');
const { env } = require('../env/.env');

const sequelize = new Sequelize(env.database, env.dbHost, env.dbPassword, {
  host: '13.52.45.76',
  // host: 'localhost',
  port: '3306',
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 2,
    min: 0,
    acquire: 300000,
    idle: 300000,
  },
});

sequelize
  .authenticate()
  .then(() => console.log('connect to mysql!'))
  .catch(err => console.error(err));

module.exports = sequelize;