'use client';

import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';

export default function Home() {
  const onHandleGetData = async () => {
    try {
      const res = await axios.get('http://localhost:1111/');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onHandleGetData();
  }, []);
  return <div>homepage</div>;
}
