'use client';

import { useEffect } from 'react';
import { usePositionCrud } from '~/api/crud/usePosition';
import { TablePosition } from '~/components/core/TablePosition';

export default function PositionPage() {
  const { position, onHandleGetDataPosition } = usePositionCrud();

  useEffect(() => {
    onHandleGetDataPosition();
  }, []);
  return (
    <div className="container mx-auto sm:p-4 text-gray-800">
      <div className="overflow-x-auto">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          List Position
        </h2>
        <table className="w-full text-xs text-center whitespace-nowrap">
          <thead>
            <tr className="bg-gray-300">
              <th className="py-3">Name</th>
              <th className="py-3">Salary</th>
              <th className="py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
        </table>
        {position?.data?.map((value, index) => {
          return (
            <div key={index}>
              <div>
                <TablePosition
                  key={index}
                  name={value.name}
                  salary={value.salary}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
