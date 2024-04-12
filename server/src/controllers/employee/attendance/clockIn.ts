import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const createClockIn = async (req: Request, res: Response) => {
  try {
    const { employeeId, location } = req.body;

    const todayDate = new Date();

    const todayMidnight = new Date();
    todayMidnight.setHours(0, 0, 0, 0);

    const tomorrowMidnight = new Date();
    tomorrowMidnight.setDate(todayMidnight.getDate() + 1);
    tomorrowMidnight.setHours(0, 0, 0, 0);

    const employee = await prisma.employee.findFirst({
      where: {
        id: parseInt(employeeId),
      },
    });
    if (!employee) {
      return res.status(404).json({
        message: "Employee Id Not Found!",
      });
    }

    const isAttandance = await prisma.attendance.findFirst({
      where: {
        employeeId: employeeId,
        clockin: {
          gte: todayMidnight,
          lt: tomorrowMidnight,
        },
      },
    });

    if (isAttandance) {
      return res.status(400).json({
        message: "you already clock in",
      });
    }

    await prisma.attendance.create({
      data: {
        clockin: todayDate,
        location: location,
        employeeId: employeeId,
        deduction: 0,
      },
    });

    res.status(200).json({
      message: "Success!",
    });
  } catch (error) {
    console.log(error);

    return res.send(error);
  }
};
export default createClockIn;
