import express, { Router } from "express";
import positions from "./positions/index";
import shifts from "./shifts/index";
import employee from "./employee/index";

const router = Router();

router.use(express.json());

router.use("/positions", positions);
router.use("/shifts", shifts);
router.use("/employee", employee);

export default router;
