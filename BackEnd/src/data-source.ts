import "reflect-metadata";
import { DataSource } from "typeorm";
import {FromSian} from './entity/FromSian';
import {ToSian} from './entity/ToSian';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1", 
    port: 3306,
    username: "root",
    password: "a123!",
    database: "christmas_message_db",
    entities: [FromSian, ToSian],
    synchronize: true,
    logging: true,
    migrations: [],
  subscribers: [],
  });
