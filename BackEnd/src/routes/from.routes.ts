import express from 'express';
import * as fromController from '../controller/FromController';

const router = express.Router();

//router.get('/recipient/:recipient',fromController.getCountByName); //path 로 받아오기
router.get('/recipient',fromController.getCountByName); //query parameter로 받아오기
router.get('/:id', fromController.getMessageById);
router.post('/check/pwd',fromController.confirmPassword);

export default router;