'use client';

import { useEffect } from 'react';
import { usePositionCrud } from '~/api/crud/usePosition';

export default function PositionPage() {
  const { position, onHandleGetDataPosition } = usePositionCrud();

  useEffect(() => {
    onHandleGetDataPosition();
  }, []);
  return (
    <div>
      {position?.data?.map((value, index) => {
        return (
          <div key={index}>
            <div>
              <h1>Position : {value.name}</h1>
              <h1>Salary : {value.salary}</h1>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
}
