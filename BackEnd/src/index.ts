import { AppDataSource } from "./data-source";
import express from "express";
import toRouter from "./routes/to.routes";
import fromRouter from "./routes/from.routes";

import cors from 'cors';

const PORT = 4000;

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    
    //cors
    app.use(cors({
        origin:'http://localhost:3000'
    }));
    
    //body-parser
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //routes
    app.use("/api/to", toRouter);
    app.use("/api/from", fromRouter);

    // run app
    app.listen(PORT);

    console.log("Server running on port: " + PORT);
  })
  .catch((error) => console.log(error));