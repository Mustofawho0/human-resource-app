import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const deleteShifts = async (req: Request, res: Response) => {
  try {
    
    const { id } = req.params

    const getIdShift = await prisma.shift.findFirst({
      where:{
        id: Number(id)
      }
    })
    if(!getIdShift){
      return res.status(404).json({
        message: "Id Not Found!"
      })
    }

    const deleteShift = await prisma.shift.delete({
      where:{
        id: Number(id)
      }
    })

    res.status(200).json({
      message: "Delete Shift Success!",
      data: deleteShift
    })
  } catch (error) {
    console.log(error)
  }
}

export default deleteShifts