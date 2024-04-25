"use client";

import axios from "axios";
import { useState } from "react";

export const useEmployeeCrud = () => {
  const [employee, setEmployee] = useState(null);

  const onHandleGetDataEmployee = async () => {
    try {
      const getEmployee = await axios.get(
        "http://localhost:1111/api/admin/employee/"
      );
      setEmployee(getEmployee.data);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleCreateDataEmployee = async (data) => {
    try {
      await axios.post(
        "http://localhost:1111/api/admin/employee/register",
        data
      );
    } catch (error) {
      console.log(error);
    }
  };
  return {
    onHandleGetDataEmployee,
    employee,
    onHandleCreateDataEmployee,
  };
};
