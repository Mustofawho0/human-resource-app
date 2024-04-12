import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const createEmployee = async (req: Request, res: Response) => {
  try {
    const { name, address, email, username, password, leave, positionId, shiftId } =
      req.body;

    const position = await prisma.position.findFirst({
      where: {
        id: parseInt(positionId),
      },
    });

    if (!position) {
      return res.status(404).json({
        message: "positionId not found",
      });
    }

    const shift = await prisma.shift.findFirst({
      where: {
        id: parseInt(shiftId),
      },
    });

    if (!shift) {
      return res.status(404).json({
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
        leave,
        positionId,
        shiftId,
      },
    });

    return res.status(201).json({
      message: "Create Employee Success!",
      data: setData,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error: Can't Create Employee"
    })
  }
};
export default createEmployee;
