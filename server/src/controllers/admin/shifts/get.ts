import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getShift = async (req: Request, res: Response) => {
  try {
    
    const { id } = req.params

    const getShift = await prisma.shift.findFirst({
      where:{
        id: Number(id)
      }
    })
    if(!getShift){
      return res.status(404).json({
        message: "Id Not Found!"
      })
    }

    res.status(200).json({
      message: "Get Shift Success!",
      data :getShift
    })

  } catch (error) {
    console.log(error)
  }
}
export default getShift