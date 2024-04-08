import express, { Router } from "express";
import createShift from "./create";
import deleteShifts from "./delete";
import getShift from "./get";
import updateShift from "./update";
import listShift from "./list";

const router = Router();

router.use(express.json());

router.post("/", createShift)
router.delete("/:id", deleteShifts)
router.get("/:id", getShift)
router.patch("/:id", updateShift)
router.get("/", listShift)

export default router