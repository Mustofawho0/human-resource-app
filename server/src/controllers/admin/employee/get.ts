import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getEmployee = async (req: Request, res: Response) => {
  try {
    
    const { id } = req.params;
    
    const getEmployee = await prisma.employee.findFirst({
      where:{
        id: Number(id)
      },
      include:{
        position: true,
        shift: true
      } as any
    })
    if(!getEmployee){
      return res.status(404).json({
        message: "Id Not Found!"
      }) 
    }
    
    res.status(200).json({
      message: "Get Employee Success!",
      data: getEmployee
    })
  } catch (error) {
    console.log(error)
  }
}