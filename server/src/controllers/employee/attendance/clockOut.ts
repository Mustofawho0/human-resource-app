import { PrismaClient } from "@prisma/client";
import { differenceInMinutes } from "date-fns";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const createClockOut = async (req: Request, res: Response) => {
  try {
    const { employeeId } = req.body;

    const todayDate = new Date();
    const employee = await prisma.employee.findFirst({
      where: {
        id: parseInt(employeeId),
      },
      include: {
        position: true
      }
    });
    if (!employee) {
      return res.status(404).json({
        message: "Employee Id Not Found!",
      });
    }

    const todayMidnight = new Date();
    todayMidnight.setHours(0, 0, 0, 0);

    const tomorrowMidnight = new Date();
    tomorrowMidnight.setDate(todayMidnight.getDate() + 1);
    tomorrowMidnight.setHours(0, 0, 0, 0);

    const isTodayAttendance = await prisma.attendance.findFirst({
      where: {
        employeeId: employeeId,
        clockin: {
          gte: todayMidnight,
          lt: tomorrowMidnight,
        },
      },
    });

    if (!isTodayAttendance) {
      return res.status(400).json({
        message: "cant clockout, you not yet clock in",
      });
    }

    if (isTodayAttendance && isTodayAttendance.clockout !== null) {
      return res.status(400).json({
        message: "you already clockout",
      });
    }

    const startWork = new Date(isTodayAttendance.clockin || todayDate);
    const endWork = todayDate;

    const workMinutesADay = 480;
    const totalEmploeeWork = differenceInMinutes(startWork, endWork) * -1;

    const lostWorkingMinutes = workMinutesADay - totalEmploeeWork;
    const deductionConstanta = Math.floor(lostWorkingMinutes / 30);
    const employeeSalary = employee.position?.salary as any
    const totalDeduction = deductionConstanta * (0.001 * employeeSalary)

    await prisma.attendance.update({
      where: {
        employeeId: employeeId,
        id: isTodayAttendance.id,
      },
      data: {
        clockout: todayDate,
        deduction: totalDeduction,
      },
    });

    return res.status(200).json({
      message: "clockout success",
    });
  } catch (error) {
    console.log(error);
  }
};
export default createClockOut;
