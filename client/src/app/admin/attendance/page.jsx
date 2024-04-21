'use client';

import { useEffect } from 'react';
import { useAttendanceCrud } from '~/api/crud/useAttendance';
import { TableAttendance } from '~/components/core/TableAttendance';

const AttendancePage = () => {
  const { attendance, onHandleGetDataAttendanceEmployee } = useAttendanceCrud();

  useEffect(() => {
    onHandleGetDataAttendanceEmployee();
  }, []);

  return (
    <div>
      <div className="container mx-auto sm:p-4 text-gray-800">
        <div className="overflow-x-auto">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Attendences
          </h2>
          <table className="w-full text-xs text-center whitespace-nowrap">
            <thead>
              <tr className="bg-gray-300">
                <th className="py-3">Name</th>
                <th className="py-3">Job Title</th>
                <th className="py-3">Location</th>
                <th className="py-3">Clock In</th>
                <th className="py-3">Clock Out</th>
                <th className="py-3">Deduction</th>
                <th className="py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
          </table>
          {attendance?.data?.map((value, index) => {
            return (
              <div key={index}>
                <div>
                  <TableAttendance
                    key={index}
                    name={value.employee.name}
                    position={value.employee.position.name}
                    location={value.location}
                    clockin={value.clockin}
                    clockout={value.clockout}
                    deduction={value.deduction}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AttendancePage;
