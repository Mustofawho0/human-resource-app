<<<<<<< HEAD
import express, { Router } from "express";
import clockin from "./attendance/index";
import clockout from "./attendance/index";
import leave from "./leave/index";
=======
import express, { Router } from 'express';
import clockin from './attendance/index';
import clockout from './attendance/index';
>>>>>>> e0e342c0d1b788b46df15177d1c34dedaaa69d85

const router = Router();

router.use(express.json());

<<<<<<< HEAD
router.use("/attendance", clockin);
router.use("/attendance", clockout);
router.use("/leave", leave);
=======
router.use('/attendance', clockin);
router.use('/attendance', clockout);
>>>>>>> e0e342c0d1b788b46df15177d1c34dedaaa69d85

export default router;
