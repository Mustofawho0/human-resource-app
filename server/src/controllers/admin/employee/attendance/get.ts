import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAttendance = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const getAttendance = await prisma.attendance.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        employee: {
          include: {
            position: true,
            shift: true,
          },
        },
      } as any,
    });

    if (!getAttendance) {
      return res.status(404).json({
        message: "Id Not Found!",
      });
    }

    return res.status(200).json({
      message: "Get Attendance Success!",
      data: getAttendance,
    });
  } catch (error) {
    console.log(error);

    return res.status(404).json({
      message: "Can't Get Employee Attendance",
    });
  }
};
