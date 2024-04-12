import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const getIdEmployee = await prisma.employee.findFirst({
      where:{
        id: Number(id)
      }
    })
    if(!getIdEmployee){
      return res.status(404).json({
        message: "Id Not Found!"
      })
    }

    const deleteEmployee = await prisma.employee.delete({
      where: {
        id: Number(id)
      }
    })

    res.status(200).json({
      message: "Delete Employee Success!",
      data: deleteEmployee
    })


  } catch (error) {
    console.log(error)
  }
}
export default deleteEmployee