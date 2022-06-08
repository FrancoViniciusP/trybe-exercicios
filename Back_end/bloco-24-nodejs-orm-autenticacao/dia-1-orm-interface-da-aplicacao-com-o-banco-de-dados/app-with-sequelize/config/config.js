require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER1,
    password: process.env.MYSQL_PASSWORD1,
    database: process.env.MYSQL_DATABASE1,
    host: process.env.HOSTNAME1,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER2,
    password: process.env.MYSQL_PASSWORD2,
    database: process.env.MYSQL_DATABASE2,
    host: process.env.HOSTNAME2,
    dialect: 'mysql',
  },
};