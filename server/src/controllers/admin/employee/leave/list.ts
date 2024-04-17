import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const listLeaveEmployee = async (req: Request, res: Response) =>{
  try {
    const { page, per_page } = req.query;

    const listLeaveEmployee = await prisma.leaveRequest.findMany({
      take: Number(per_page) || 10,
      skip: (Number(page) - 1) * Number(per_page) || 0,
      include: {
        employee:{
          include:{
            position: true
          }
        }
      }
    })

    return res.status(200).json({
      message: "List Leave Employee",
      data: listLeaveEmployee
    })
  } catch (error) {
    console.log(error)
    return res.status(404).json({
      message: "Error List Leave Employee!"
    })
  }
}