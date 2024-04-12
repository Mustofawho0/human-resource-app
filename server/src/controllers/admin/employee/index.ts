import express, { Router } from "express";
import createEmployee from "./create";
import deleteEmployee from "./delete";
import { updateEmployee } from "./update";
import { getEmployee } from "./get";
import { listEmployee } from "./list";

const router = Router();

router.use(express.json());

router.post("/", createEmployee)
router.delete("/:id", deleteEmployee)
router.put("/:id", updateEmployee)
router.get("/:id", getEmployee)
router.get("/", listEmployee)

export default router