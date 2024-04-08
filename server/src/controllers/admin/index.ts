import express, { Router } from "express";
import positions from "./positions/index"

const router = Router();

router.use(express.json());

router.use("/positions", positions)

export default router;