import "reflect-metadata";
import { DataSource } from "typeorm";
import {FromSian} from './entity/FromSian';
import {ToSian} from './entity/ToSian';

require("dotenv").config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.RDS_HOSTNAME, 
    port: Number(process.env.RDS_PORT),
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    entities: [FromSian, ToSian],
    synchronize: true,
    logging: true,
    migrations: [],
  subscribers: [],
  });
