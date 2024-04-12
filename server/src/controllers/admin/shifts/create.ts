import { PrismaClient } from "@prisma/client";
import { parse } from "date-fns";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const createShift = async (req: Request, res: Response) => {
  try {
    const { name, startShift, endShift } = req.body;

    const startTime = parse(startShift, "HH:mm:ss", new Date());
    const endTime = parse(endShift, "HH:mm:ss", new Date()); // diparsing betujuan untuk menjadikan data menjadi type data DateTime karena harus samakan dengan typedata pada database

    const isBefore = startTime < endTime;
    if (!isBefore) {
      return res.status(400).json({
        message: "Error: End Shift is Before Start Shift!",
      });
    }

    const admin = await prisma.shift.create({
      data: {
        name,
        startShift: startTime,
        endShift: endTime,
      },
    });

    res.status(200).json({
      message: " Success!",
      data: admin,
    });
  } catch (error) {
    res.send(error);
  }
};
export default createShift;
