import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma =  new PrismaClient

const createPosition = async (req: Request, res: Response) => {
  try {
    
    const { name, salary } = req.body;

    const admin = await prisma.position.create({
      data:{
        name,
        salary
      }
    })

    res.status(200).json({
      message: "Success!",
      data: admin
    })

  } catch (error) {
    console.log(error)
  }
}

export default createPosition;