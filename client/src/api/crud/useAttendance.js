'use client';

import axios from 'axios';
import { useState } from 'react';

export const useAttendanceCrud = () => {
  const [attendance, setAttendance] = useState(null);

  const onHandleGetDataAttendanceEmployee = async () => {
    try {
      const res = await axios.get(
        'http://localhost:1111/api/admin/employee/attendances/'
      );
      setAttendance(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    attendance,
    onHandleGetDataAttendanceEmployee,
  };
};
