import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { parse } from "date-fns"

const prisma = new PrismaClient();

const updateShift = async (req: Request, res: Response) => {
  try {
    
    const { id } = req.params

    const { name, startShift, endShift } = req.body

    const startTime = parse(startShift, "HH:mm:ss", new Date())
    const endTime = parse(endShift, "HH:mm:ss", new Date())

    const isBefore = startTime < endTime

    if(!isBefore){
      return res.status(400).json({
        message: "Error: EndShift input Before StartShift"
      })
    }

    const updateShift = await prisma.shift.findFirst({
      where:{
        id: Number(id)
      }
    })
    if(!updateShift){
      res.status(404).json({
        message: "Id Not Found!"
      })
    }

    const updatedShift = await prisma.shift.update({
      where: {
        id: Number(id)
      },
      data:{
        name,
        startShift: startTime,
        endShift: endTime
      }
    })

    res.status(200).json({
      message: "Upadate Shift Success!",
      data: updatedShift
    })

  } catch (error) {
    console.log(error)
  }
}
export default updateShift