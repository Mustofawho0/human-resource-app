import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";

const router = Router();
const prisma = new PrismaClient();

// Get Data

export const getAllData = async (req: Request, res: Response) => {
  try {
    const branches = await prisma.am.findMany()
    res.status(200).json({
      message: "Success!",
      data: branches
    })

  } catch (error) {
    console.log(error)
  }
}
