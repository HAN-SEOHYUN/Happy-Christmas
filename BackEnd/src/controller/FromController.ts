import { FromSian } from './../entity/FromSian';
import { AppDataSource } from '../data-source';
import {Request, Response} from 'express';

const fromSianRepository = AppDataSource.getRepository(FromSian);

//이름을 넣으면 이름에 해당하는 row 의 count를 알려줌
export async function getCountByName(req:Request, res:Response){
    const inputRecipient = req.body.recipient;
    console.log("입력된 값",inputRecipient);

    try{
        const [fromSian_object,count] = await fromSianRepository
        .findAndCount({where : {recipient: inputRecipient}});

        res.send({
            success: true,
            data : {
                fromSian_object, count
            }
        })
    }catch(err){
        console.log(err);
    }
}

export async function getMessageById(req:Request, res:Response){
    const inputId = parseInt(req.params.id);

    try{
        const fromSian_object = await fromSianRepository
        .findOneBy({
            id: inputId,
        });
    
        res.send({
            //pwd는 클라이언트로 전송하지않는다.
            data : {
                id : fromSian_object?.id,
                recipient : fromSian_object?.recipient,
                createdAt : fromSian_object?.createdAt,
                message : fromSian_object?.message,
            }
        })
    }catch(err){
        console.log(err);
    }
}

export async function confirmPassword(req:Request, res:Response){
    const inputRecipient = req.body.recipient;
    const  inputPwd = req.body.pwd;

    try{
        const fromSian_object = await fromSianRepository
        .findOneBy({
            recipient: inputRecipient
        });
    
        if(fromSian_object?.pwd !== inputPwd){
            res.send({
                success:false
            });
        }
    
        res.send({
            success: true,
            data : {id : fromSian_object?.id} //데이터의 id 만 보내기
        });
    }catch(err){
        console.log(err);
    }
}
