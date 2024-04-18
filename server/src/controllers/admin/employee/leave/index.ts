import express, { Router } from "express";
import { listLeaveEmployee } from "./list";
import { getLeaveEmployee } from "./get";
import { updateLeaveEmployee } from "./update";

const router = Router();

router.use(express.json());

router.get("/", listLeaveEmployee);
router.get("/:id", getLeaveEmployee)
router.put("/:id", updateLeaveEmployee)

export default router