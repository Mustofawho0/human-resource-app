import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const listPosition = async (req:Request, res:Response) => {
  try {
    
    const { page, per_page } = req.query;

    const listPosition = await prisma.position.findMany({
      take: Number(per_page) || 10,
      skip: (Number(page) - 1) * Number(per_page) || 0
    })

    if(listPosition.length === 0){
      return res.status(404).json({
        message: "Page Not Found!"
      })
    }

    res.status(200).json({
      message: "Success!",
      data: listPosition
    })

  } catch (error) {
    console.log(error)
  }
}

export default listPosition