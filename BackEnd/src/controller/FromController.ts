import { FromSian } from './../entity/FromSian';
import { AppDataSource } from '../data-source';
import {Request, Response} from 'express';

const fromSianRepository = AppDataSource.getRepository(FromSian);

//이름을 넣으면 이름에 해당하는 row 의 count를 알려줌
export async function getCountByName(req:Request, res:Response){
    let inputRecipient = req.params.recipient;

    await fromSianRepository
    .findAndCount({where : {recipient: inputRecipient}})
    .then((object)=> {
        console.log (object[1]);
        res.send({
            success: true,
            data : {
                count: object[1]
            }
        })
    })
    .catch((err)=>console.log(err));
}

export async function getMessageById(req:Request, res:Response){
    let inputId = parseInt(req.params.id);

    await fromSianRepository
    .findOneBy({
        id: inputId,
    })
    .then((object)=>{
        res.send({
            //pwd는 클라이언트로 전송하지않는다.
            data : {
                id : object?.id,
                recipient : object?.recipient,
                createdAt : object?.createdAt,
                message : object?.message,
            }
        })
    })
    .catch((err)=>console.log(err));
}

export async function confirmPassword(req:Request, res:Response){
    let inputRecipient = req.body.recipient;
    let inputPwd = req.body.pwd;

    await fromSianRepository
    .findBy({
        recipient: inputRecipient
    })
    .then((object)=> {

        if(object[0].pwd === inputPwd) {
            res.send({
                success: true,
                data : {id : object[0].id} //데이터의 id 만 보내기
            });
        }else{
            res.send({
                success:false
            });
        }
    })
    .catch((err)=>console.log(err));

    // {
    //     "success": true,
    //     "object": {
    //         "id": 2,
    //         "recipient": "홍길동",
    //         "pwd": "1",
    //         "message": "안녕",
    //         "createdAt": "2022-12-15T09:28:29.000Z"
    //     }
    // }


}
