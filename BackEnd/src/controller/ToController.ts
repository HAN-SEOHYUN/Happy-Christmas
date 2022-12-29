import { ToSian } from './../entity/ToSian';
import { AppDataSource } from '../data-source';
import {Request, Response} from 'express';

const toSianRepository = AppDataSource.getRepository(ToSian);

export async function saveMesage(req:Request, res:Response){

    try{
        const toSian_object = await toSianRepository.save(req.body);
        
        res.send({
            status : "success",
            data : toSian_object
        })
    }catch(err){
        console.log(err);
    }
}