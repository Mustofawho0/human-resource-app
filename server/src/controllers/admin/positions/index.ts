import express, { Router } from "express"
import createPosition from "./create";
import updatePosition from "./update";
import getPosition from "./get";
import listPosition from "./list";
import deletePosition from "./delete";

const router = Router();

router.use(express.json()); 

router.post("/", createPosition)
router.patch("/:id", updatePosition)
router.get("/:id", getPosition)
router.get("/", listPosition)
router.delete("/:id", deletePosition)

export default router;