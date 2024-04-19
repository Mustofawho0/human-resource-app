'use client';

import { useEmployeeCrud } from '~/api/crud/useEmployee';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ValidasiRegister } from '~/supports/schema/registerSchema';

export default function RegisterPage() {
  const { onHandleCreateDataEmployee } = useEmployeeCrud();

  return (
    <>
      <div>
        <Formik
          initialValues={{
            name: '',
            address: '',
            email: '',
            username: '',
            password: '',
            positionId: '',
            leave: '',
            shiftId: '',
          }}
          validationSchema={ValidasiRegister}
          onSubmit={async (data) => {
            onHandleCreateDataEmployee(data);
            console.log(data);
          }}
        >
          {/* console.log(value) */}
          {({ dirty, isValid }) => {
            return (
              <Form>
                <div className="flex flex-col items-center py-[50px] font-sans">
                  <p className="font-bold text-2xl font-sans tracking-wide pb-[5px]">
                    Register for Employee
                  </p>
                  <div className="flex flex-row gap-2 ">
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text font-bold">Name</span>
                      </div>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs rounded-none border border-gray-300"
                      />
                      <ErrorMessage
                        name="name"
                        component={'div'}
                        className="text-sm text-red-500"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text font-bold">Address</span>
                      </div>
                      <Field
                        type="text"
                        name="address"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs rounded-none border border-gray-300"
                      />
                      <ErrorMessage
                        name="address"
                        component={'div'}
                        className="text-sm text-red-500"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col items-center w-[438px] ">
                    <label className="form-control w-auto">
                      <div className="label ">
                        <span className="label-text font-bold w-[428px] ">
                          Email
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="email"
                        placeholder="Type here"
                        className="input input-bordered rounded-none border border-gray-300"
                      />
                      <ErrorMessage
                        name="email"
                        component={'div'}
                        className="text-sm text-red-500"
                      />
                    </label>
                    <label className="form-control w-auto">
                      <div className="label">
                        <span className="label-text font-bold w-[428px]">
                          Username
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="username"
                        placeholder="Type here"
                        className="input input-bordered rounded-none border border-gray-300"
                      />
                      <ErrorMessage
                        name="username"
                        component={'div'}
                        className="text-sm text-red-500"
                      />
                    </label>
                    <label className="form-control w-auto">
                      <div className="label">
                        <span className="label-text font-bold w-[428px]">
                          Password
                        </span>
                      </div>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Type here"
                        className="input input-bordered rounded-none border border-gray-300"
                      />
                      <ErrorMessage
                        name="password"
                        component={'div'}
                        className="text-sm text-red-500"
                      />
                    </label>
                    <label className="form-control w-auto">
                      <div className="label">
                        <span className="label-text font-bold w-[428px]">
                          Leave
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="leave"
                        placeholder="Type here"
                        className="input input-bordered rounded-none border border-gray-300"
                      />
                      <ErrorMessage
                        name="leave"
                        component={'div'}
                        className="text-sm text-red-500"
                      />
                    </label>
                    <label className="form-control w-auto">
                      <div className="label">
                        <span className="label-text font-bold w-[428px]">
                          Role
                        </span>
                      </div>
                      <Field
                        as="select"
                        // type="role"
                        name="positionId"
                        placeholder="Type here"
                        className="input input-bordered rounded-none border border-gray-300"
                      >
                        <option value="">Choose Role</option>
                        <option value="1">Manager</option>
                        <option value="2">
                         Project/Product Manager
                        </option>
                        <option value="3">Programmer</option>
                      </Field>
                      <ErrorMessage
                        name="positionId"
                        component={'div'}
                        className="text-sm text-red-500"
                      />
                    </label>
                    <label className="form-control w-auto">
                      <div className="label">
                        <span className="label-text font-bold w-[428px]">
                          Shift
                        </span>
                      </div>
                      <Field
                        as="select"
                        // type="role"
                        name="shiftId"
                        placeholder="Type here"
                        className="input input-bordered rounded-none border border-gray-300"
                      >
                        <option value="">Choose Shift for Employee </option>
                        <option value="1">09:00 - 18:00</option>
                        <option value="2">13:00 - 22:00</option>
                      </Field>
                      <ErrorMessage
                        name="shiftId"
                        component={'div'}
                        className="text-sm text-red-500"
                      />
                    </label>
                    <button
                      className="btn bg-gray-700 text-white rounded-none hover:bg-red-400 my-6 w-[428px]"
                      type="submit"
                      //   disabled={!(dirty && isValid) || isLoading}
                    >
                      Register Employee
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
