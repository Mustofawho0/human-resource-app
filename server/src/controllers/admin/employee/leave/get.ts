import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getLeaveEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const getLeaveEmployee = await prisma.leaveRequest.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        employee: {
          include: {
            position: true,
          },
        },
      } as any
    });
    if (!getLeaveEmployee) {
      return res.status(404).json({
        message: "Id Not Found!",
      });
    }

    return res.status(200).json({
      message: "Get Leave Success!",
      data: getLeaveEmployee,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "Error to get Leave employee",
    });
  }
};
