import express, { Router } from "express"
import createPosition from "./create";

const router = Router();

router.use(express.json()); 

router.post("/", createPosition)

export default router;