import { PrismaClient } from "@prisma/client";
import { isWeekend, addDays, format} from "date-fns";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const updateLeaveEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { status } = req.body;

    if (status !== "rejected" && status !== "approved") {
      return res.status(400).json({
        message: "Only approved and rejected status Allowed!",
      });
    }

    const employeeLeaveReq = await prisma.leaveRequest.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (!employeeLeaveReq) {
      return res.status(404).json({
        message: "Leave Request Id Not Found!",
      });
    }

    if (
      employeeLeaveReq.status === "rejected" ||
      employeeLeaveReq.status === "approved"
    ) {
      return res.status(400).json({
        message: "Status Already rejected or approved!"
      })
    }

    if (status === "rejected") {
      await prisma.leaveRequest.update({
        where: {
          id: Number(id),
        },
        data: {
          status: status,
        },
      });
      return res.status(200).json({
        message: "Update Status Success!",
      });
    } else if (status === "approved") {
      const employee = await prisma.employee.findFirst({
        where: {
          id: Number(employeeLeaveReq.employeeId),
        },
        include:{
          shift: true
          }
      });

      const leaveStartShift = format(employee?.shift?.startShift || new Date(), "HH:mm:ss")
      
      const leaveEndShift = format(employee?.shift?.endShift || new Date(), "HH:mm:ss")
      
      
      // Example usage
      const startDate = new Date(employeeLeaveReq.startDate);
      
      const endDate = new Date(employeeLeaveReq.endDate);
      
      const datesBetween = getDates(startDate, endDate);
      
     for(let i=0; i<datesBetween.length; i++){
      const formatedDateOnly = format(datesBetween[i], "yyyy-MM-dd")

      const leaveStartAtt = (`${formatedDateOnly}T${leaveStartShift}`) 
      const startShift = new Date(leaveStartAtt)
      
     
      const leaveEndAtt = (`${formatedDateOnly}T${leaveEndShift}`)
      const endShift = new Date(leaveEndAtt)
      
    //   await prisma.attendance.create({
    //     data:{
    //       clockin: startShift,
    //       clockout: endShift,
    //       location: employeeLeaveReq.reason,
    //       employeeId: employeeLeaveReq.employeeId
    //     } as any
    //   })
     }

      // const remainingLeave =
      //   (employee?.leave || 0) - (employeeLeaveReq?.totalDayLeave || 0);

      // await prisma.employee.update({
      //   where: {
      //     id: Number(employeeLeaveReq.employeeId),
      //   },
      //   data: {
      //     leave: remainingLeave,
      //   },
      // });

      // await prisma.leaveRequest.update({
      //   where: {
      //     id: Number(id),
      //   },
      //   data: {
      //     status: status,
      //   },
      // });
      // return res.status(200).json({
      //   message: "Update Leave Success!",
      // });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "Error to Update Leave!",
    });
  }
};

function getDates(startDate: Date, endDate: Date) {
  const dates = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    if (!isWeekend(currentDate)) {
      dates.push(new Date(currentDate));
    }
    currentDate = addDays(currentDate, 1);
  }
  console.log(currentDate)
  return dates;
}