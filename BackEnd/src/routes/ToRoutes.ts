import express from 'express';
import * as toController from '../controller/ToController';

const router = express.Router();

//api/to
router.post('/',toController.saveMesage);

export default router;