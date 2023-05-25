import { DataSource } from 'typeorm';
import 'dotenv/config';

const defaultDataSource = new DataSource({
  type: 'postgres',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  schema: process.env.POSTGRES_SCHEMA,
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  logging: true,
  migrations: ['./src/data/migrations/*.ts'],
});

export default defaultDataSource;
