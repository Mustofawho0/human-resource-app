import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";


const prisma = new PrismaClient();

export const createLeaveReq = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate, reason, employeeId } = req.body;

    const startLeave = new Date(startDate);
    console.log(startLeave)

    const endLeave = new Date(endDate);
    console.log(endLeave)

    if(!startDate || !endDate){
      return res.status(400).json({
        message: "Start Date and End Date are Required!"
      })
    }

    if(startDate >= endDate){
      return res.status(400).json({
        message: "Start Date must be before End Date!"
      })
    }

    const createLeave = await prisma.leaveRequest.create({
      data: {
        startDate: startLeave,
        endDate: endLeave,
        reason,
        status: false,
        employeeId: employeeId
      } as any
    })

    return res.status(200).json({
      message: "Request Leave Success!",
      data: createLeave
    })

  } catch (error) {
    console.log(error)
    return res.status(404).json({
      message: "Error to Request Leave!"
    })
  }
}