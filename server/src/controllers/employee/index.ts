import express, { Router } from "express";
import clockin from "./attendance/index";
import clockout from "./attendance/index";

const router = Router();

router.use(express.json());

router.use("/attendance", clockin);
router.use("/attendance", clockout)

export default router;
