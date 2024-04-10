import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const createEmployee = async (req: Request, res: Response) => {
  try {
    const { name, address, email, username, password, positionId, shiftId } =
      req.body;

    const position = await prisma.position.findFirst({
      where: {
        id: parseInt(positionId),
      },
    });

    if (!position) {
      res.status(404).json({
        message: "positionId not found",
      });
    }

    const shift = await prisma.shift.findFirst({
      where: {
        id: parseInt(shiftId),
      },
    });

    if (!shift) {
      res.status(404).json({
        message: "shiftId not found",
      });
    }

    const setData = await prisma.employee.create({
      data: {
        name,
        address,
        email,
        username,
        password,
        positionId,
        shiftId,
      },
    });

    if (!positionId && !shiftId) {
      res.status(404).json({
        message: " Position Id / Shift Id Not Found!",
      });
    }

    return res.status(201).json({
      message: "Create Employee Success!",
      data: setData,
    });
  } catch (error) {
    console.log(error);
  }
};
export default createEmployee;
