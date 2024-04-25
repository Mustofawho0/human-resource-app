import express, { Router } from 'express';
import clockin from './attendance/index';
import clockout from './attendance/index';
import leave from './leave/index'

const router = Router();

router.use(express.json());

router.use('/attendance', clockin);
router.use('/attendance', clockout);
router.use('/leave', leave)

export default router;
