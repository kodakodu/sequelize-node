import { Sequelize } from 'sequelize';

const db = new Sequelize('app', '', '', {
  storage: './database.sqlite',
  dialect: 'sqlite',
  logging: true,
});

export default db;
