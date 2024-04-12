import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const updatePosition = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { name, salary } = req.body;

    const getIdPosition = await prisma.position.findFirst({
      where: {
        id: Number(id),
      },
    });
    console.log(getIdPosition);

    if (!getIdPosition) {
      return res.status(404).json({
        message: "Id Positions Not Found!",
      });
    }

    const updatedPosition = await prisma.position.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        salary,
      },
    });

    res.status(200).json({
      message: "Update Positions Success!",
      data: updatedPosition,
    });
  } catch (error) {
    console.log(error);
  }
};

export default updatePosition;
