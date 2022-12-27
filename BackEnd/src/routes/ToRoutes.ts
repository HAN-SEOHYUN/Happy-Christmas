import express from 'express';
import * as toController from '../controller/ToController';

const router = express.Router();

router.post('/',toController.saveMesage);

export default router;