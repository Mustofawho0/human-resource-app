import express, { Router } from "express";
import listAttendanceEmployee from "./list";
import deleteAttendance from "./delete";
import { getAttendance } from "./get";
import { updateEmployeeAttendance } from "./update";


const router = Router();

router.use(express.json());

router.get("/", listAttendanceEmployee)
router.delete("/:id", deleteAttendance)
router.get("/:id", getAttendance)
router.put("/:id", updateEmployeeAttendance)

export default router