import { PrismaClient } from "@prisma/client";
import { parse } from "date-fns";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const employeeAttendances = async (req: Request, res: Response) => {
  try {
    const { clockIn, clockOut, location } = req.body;

    const startClock = parse(clockIn, "HH:mm:ss", new Date());
    const endClock = parse(clockOut, "HH:mm:ss", new Date());
    const getAttendances = await prisma.attendance.create({
      data: {
        clockin: startClock,
        clockout: endClock,
        location,
      }
    });

    return res.status(200).json({
      message: "Clock in success!"
    })
  } catch (error) {
    console.log(error);
  }
};
