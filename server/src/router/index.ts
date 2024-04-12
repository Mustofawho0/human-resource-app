import express, { Router } from "express";
import admin from "../controllers/admin/index"
import employee from '../controllers/employee/index'

const router = Router()

router.use(express.json());

router.use("/admin", admin)
router.use("/employee", employee)

export default router;