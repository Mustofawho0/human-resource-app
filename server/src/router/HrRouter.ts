import { Router } from "express";
import { getAllData } from "../controllers/HrController";

const router = Router();

router.get("/", getAllData)

export default router;