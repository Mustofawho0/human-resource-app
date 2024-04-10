import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getPosition = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const getPosition = await prisma.position.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (!getPosition) {
      return res.status(404).json({
        message: "Id Not Found!",
      });
    }

    res.status(200).json({
      message: "Get Position Success!",
      data: getPosition,
    });
  } catch (error) {
    console.log(error);
  }
};

export default getPosition;
