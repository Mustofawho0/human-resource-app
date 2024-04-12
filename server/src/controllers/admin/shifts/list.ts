import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

const listShift = async (req: Request, res: Response) => {
  try {
    
    const listShift = await prisma.shift.findMany()

    if(listShift.length === 0){
      return res.status(404).json({
        message: "Data Not Found!"
      })
    }
    
    res.status(200).json({
      message: "Success!",
      data: listShift
    })
  } catch (error) {
    console.log(error)
  }
}
export default listShift