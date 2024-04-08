import express, { Router } from "express";
import positions from "./positions/index";
import shifts from "./shifts/index";

const router = Router();

router.use(express.json());

router.use("/positions", positions);
router.use("/shifts", shifts);

export default router;
