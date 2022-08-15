import * as dotenv from 'dotenv';
dotenv.config();

const {
  PORT = 4000,
  DB_URI = 'postgres://postgres:123456@localhost:5432/postgres',
} = process.env;

export const DB = {
  URI: DB_URI,
};

export const SETUP = {
  PORT: PORT,
};
