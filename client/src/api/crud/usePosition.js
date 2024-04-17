'use client'

import axios from 'axios';
import { useState } from 'react';

export const usePositionCrud = () => {
  const [position, setPosition] = useState(null);

  const onHandleGetDataPosition = async () => {
    try {
      const res = await axios.get('http://localhost:1111/api/admin/positions');
      setPosition(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    position,
    onHandleGetDataPosition,
  };
};
