import express from 'express';
import * as fromController from '../controller/FromController';

const router = express.Router();

router.get('/recipient/:recipient',fromController.getCountByName); 
router.get('/:id', fromController.getMessageById);
router.post('/',fromController.confirmPassword);

export default router;