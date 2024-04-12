import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const listEmployee = async (req: Request, res: Response) => {
  try {
    
    const { page, per_page } = req.query;

    const listEmployee = await prisma.employee.findMany({
      take: Number(per_page) || 10,
      skip: (Number(page) - 1) * Number(per_page) || 0,
      include:{
        position: true,
        shift:true,
        
      }
    })

    if(listEmployee.length === 0){
      return res.status(404).json({
        message: "Page Not Found!"
      })
    }

    return res.status(200).json({
      message: "Success!",
      data: listEmployee
    })

  } catch (error) {
    console.log(error)
  }
}