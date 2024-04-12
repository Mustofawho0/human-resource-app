import { PrismaClient } from "@prisma/client";
import express, { Express, Request, Response } from "express";
import router from "./router";

const app: Express = express();
const port = 1111;
const cors = require("cors");
const prisma = new PrismaClient();

app.use(cors());
app.use("/api", router);

app.listen(port, () => {
  console.log(`🦊[server]: This Server Running at http://localhost:${port}`);
});
