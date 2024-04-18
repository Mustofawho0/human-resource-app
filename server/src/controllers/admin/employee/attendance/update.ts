 import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const updateEmployeeAttendance = async (req: Request, res: Response) =>{
  try {
    const { id } = req.params;

    const { clockin, clockout, location, deduction } = req.body

    const clockInFormatedDate = new Date(clockin)
    const clockOutFormatedDate = new Date(clockout)

    const getAttendance = await prisma.attendance.findFirst({
      where:{
        id: Number(id)
      }
    })
    if(!getAttendance){
      return res.status(404).json({
        message: "Id Not Found!"
      })
    }

    const updateEmployeeAttendance = await prisma.attendance.update({
      where:{
        id: Number(id)
      },
      data:{
        clockin: clockInFormatedDate,
        clockout: clockOutFormatedDate,
        location,
        deduction
      }
    })

    return res.status(200).json({
      message: "Update Employee Attendance Success!",
      data: updateEmployeeAttendance
    })
  } catch (error) {
    console.log(error)
    return res.status(404).json({
      message: "Failed To Update Employee Attendance!"
    })
  }
}