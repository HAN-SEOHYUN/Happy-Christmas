import { ToSian } from './../entity/ToSian';
import { AppDataSource } from '../data-source';
import {Request, Response} from 'express';

const toSianRepository = AppDataSource.getRepository(ToSian);

export async function saveMesage(req:Request, res:Response){
    await toSianRepository
    .save(req.body)
    .then((object)=>{
        res.send({
            status : "success",
            data : object
        })
    })
    .catch((err)=>console.log(err));
}