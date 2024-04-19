'use client';

import * as Yup from 'yup';

export const ValidasiRegister = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  address: Yup.string().required('Address is Required'),
  email: Yup.string()
    .email('Email Must be Valid')
    .required('Email is Required'),
  username: Yup.string()
    .min(6, 'Username Must Have Minimum 6 Characters')
    .required('Username is Required'),
  password: Yup.string().required('Password is Required'),
  positionId: Yup.number().required('Position is Required'),
  leave: Yup.number().required('Leave is Required'),
  shiftId: Yup.number().required('Shift is Required'),
});
