import "reflect-metadata";
import { DataSource } from "typeorm";
import {FromSian} from './entity/FromSian';
import {ToSian} from './entity/ToSian';

require("dotenv").config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST, 
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [FromSian, ToSian],
    synchronize: true,
    logging: true,
    migrations: [],
  subscribers: [],
  });
