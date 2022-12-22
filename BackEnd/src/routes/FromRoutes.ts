import express from 'express';
import * as fromController from '../controller/FromController';

const router = express.Router();

//api/from //구분을 못함 //동적 라우팅 //정규표현식
router.get('/recipient/:recipient',fromController.getCountByName);
router.get('/:id', fromController.getMessageById);
router.post('/',fromController.confirmPassword);

export default router;

//어디서 하든 상관이 없지만
//둘다 해야됨 ! BEST
