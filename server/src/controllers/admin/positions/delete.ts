import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

const deletePosition = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const getIdPosition = await prisma.position.findFirst({
      where:{
        id: Number(id)
      }
    })
    if(!getIdPosition){
      return res.status(404).json({
        message: "Id Not Found!"
      })
    }

    const deletePosition = await prisma.position.delete({
      where: {
        id: Number(id)
      }
    })

    res.status(200).json({
      message: "Delete Success!",
      data: deletePosition
    })
  } catch (error) {
    console.log(error)
  }
}
export default deletePosition