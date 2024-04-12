import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { name, address, email, username, password, leave, positionId, shiftId } =
      req.body;

    const getIdEmployee = await prisma.employee.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (!getIdEmployee) {
      return res.status(404).json({
        message: "Id Not Found!",
      });
    }

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

    const updateEmployee = await prisma.employee.update({
      where: {
        id: Number(id),
      },
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

    res.status(200).json({
      message: "Update Employee Success!",
      data: updateEmployee,
    });
  } catch (error) {
    console.log(error);

    return res.status(404).json({
      messsage: "Error To Update",
    });
  }
};
