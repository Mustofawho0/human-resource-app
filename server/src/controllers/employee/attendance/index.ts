import express, { Router } from 'express';
import createClockIn from './clockIn';
import createClockOut from './clockOut';

const router = Router();

router.use(express.json());

router.post('/clockin', createClockIn);
router.post('/clockout', createClockOut);

export default router;
