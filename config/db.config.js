require("dotenv").config()

module.exports = {
  HOST: process.env.MYSQL_HOST,
  USER: process.env.MYSQLDB_USER,
  PASSWORD: process.env.MYSQLDB_ROOT_PASSWORD,
  DB: process.env.MYSQLDB_DATABASE,
  dialect: 'mysql',
  PORT: process.env.MYSQLDB_LOCAL_PORT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  
};
