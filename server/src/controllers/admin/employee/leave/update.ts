import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const updateLeaveEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    


  } catch (error) {
    console.log(error)
    return res.status(404).json({
      message: "Error to Update Leave!"
    })
  }
}