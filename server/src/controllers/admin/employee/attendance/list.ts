import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const listAttendanceEmployee = async (req: Request, res: Response) => {
  try {

    const { page, per_page } = req.query;

    const listAttendanceEmployee = await prisma.attendance.findMany({
      take:Number(per_page) || 10,
      skip: (Number(page) - 1 ) * Number(per_page) || 0,
      include:{
        employee:{
          include:{
            position:true,
            shift: true
          }
        }
      }
    })
    res.status(200).json({
      message: "List Attendance Employee Success!",
      data: listAttendanceEmployee
    });
  } catch (error) {
    console.log(error);
  }
};
export default listAttendanceEmployee;
