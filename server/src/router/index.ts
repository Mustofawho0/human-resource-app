import express, { Router } from "express";
import HrRouter from "./HrRouter"

const router = Router();

router.use(express.json());

router.use("/api", HrRouter)

export default router;