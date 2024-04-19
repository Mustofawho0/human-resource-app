'use client';

import { useEffect } from 'react';
import { useEmployeeCrud } from '~/api/crud/useEmployee';
import { TableEmployee } from '~/components/core/TableEmployee';

const DataEmployee = () => {
  const { employee, onHandleGetDataEmployee } = useEmployeeCrud();

  useEffect(() => {
    onHandleGetDataEmployee();
  }, []);

  return (
    <div>
      <div className="container mx-auto sm:p-4 text-gray-800">
        <div className="overflow-x-auto">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            List Employee
          </h2>
          <table className="w-full text-xs text-center whitespace-nowrap">
            <thead>
              <tr className="bg-gray-300">
                <th className="py-3">Name</th>
                <th className="py-3">Email</th>
                <th className="py-3">Job title</th>
                <th className="py-3">Address</th>
                <th className="py-3">Leave</th>
                <th className="py-3">Salary</th>
                <th className="py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
          </table>
          {employee?.data?.map((value, index) => {
            return (
              <div key={index}>
                <div className="">
                  <TableEmployee
                    key={index}
                    name={value.name}
                    address={value.address}
                    email={value.email}
                    leave={value.leave}
                    position={value.position.name}
                    salary={value.position.salary}
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
export default DataEmployee;
