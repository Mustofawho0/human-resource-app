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

    return res.status(200).json({
      message: "Create Position Success!",
      data: admin
    })

  } catch (error) {
    return res.status(404).json({
      message: "Error: Can't Create Position!"
    })
  }
}

export default createPosition;