import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const deleteAttendance = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const getAttendance = await prisma.attendance.findFirst({
      where: {
        id: Number(id)
      }
    })
    if(!getAttendance){
      return res.status(404).json({
        message: "Attendance Id Not Found!"
      })
    }

    const deleteAttendance = await prisma.attendance.delete({
      where:{
        id: Number(id)
      }
    })

    return res.status(200).json({
      message: "Delete Attendance Success!",
      data: deleteAttendance
    })
  } catch (error) {
    return res.status(404).json({
      message: "Failed To Delete Attendance!"
    })
  }
}
export default deleteAttendance