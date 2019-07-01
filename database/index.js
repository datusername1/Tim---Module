const mysql = require('mysql');
const Sequelize = require('sequelize');
// const { env } = require('../env/.env');

const sequelize = new Sequelize('adidas', 'postgres', 'timtran', {
  host: '52.38.44.191',
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => console.log('connect to mysql!'))
  .catch(err => console.error(err));

module.exports = sequelize;

// hey
