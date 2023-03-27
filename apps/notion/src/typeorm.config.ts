import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Test } from './app/test.entity';

config();

export default new DataSource({
  type: 'sqlite',
  database: 'shoppingDB',
  entities: [Test],
  synchronize: true,
  migrations: [],
});
