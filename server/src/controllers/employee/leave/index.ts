import express, { Router } from "express";
import { createLeaveReq } from "./create";

const router = Router();

router.use(express.json());

router.post("/request", createLeaveReq)

export default router