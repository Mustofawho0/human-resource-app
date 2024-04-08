import express, { Router } from "express";
import admin from "../controllers/admin/index"
import users from "../controllers/users/index"

const router = Router()

router.use(express.json());

router.use("/admin", admin)
router.use("/users", users)

export default router;