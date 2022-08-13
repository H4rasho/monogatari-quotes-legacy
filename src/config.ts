import * as dotenv from 'dotenv';
dotenv.config();

const {
  PORT = 4000,
  DB_HOST = 'localhost',
  DB_PORT = 5432,
  DB_NAME = 'monogatari',
  DB_USER = 'postgres',
  DB_PASS = '123456',
  DB_DIALECT = 'postgres',
} = process.env;

export const DB = {
  DIALECT: DB_DIALECT,
  HOST: DB_HOST,
  PORT: DB_PORT,
  NAME: DB_NAME,
  USER: DB_USER,
  PASS: DB_PASS,
};

export const SETUP = {
  PORT: PORT,
};
