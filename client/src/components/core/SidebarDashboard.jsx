import Link from 'next/link';
import {
  AiFillSchedule,
  AiFillHome,
  AiFillHdd,
  AiFillIdcard,
} from 'react-icons/ai';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { RiLogoutBoxRFill } from 'react-icons/ri';

export const SidebarDashboard = () => {
  return (
    <div className="h-full p-3 space-y-2 w-60 bg-gray-50 text-gray-800">
      <div className="flex items-center p-2 space-x-4">
        <img
          src="https://source.unsplash.com/100x100/?portrait"
          alt=""
          className="w-12 h-12 rounded-full bg-gray-500"
        />
        <div>
          <h2 className="text-lg font-semibold">Admin</h2>
          <span className="flex items-center space-x-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xs hover:underline text-gray-600"
            >
              View profile
            </a>
          </span>
        </div>
      </div>
      <div className="divide-y divide-gray-300">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li className="bg-gray-100 text-gray-900">
            <Link
              rel="noopener noreferrer"
              href={'/dashboard'}
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <AiFillHome className="w-5 h-5 fill-current text-gray-600" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              rel="noopener noreferrer"
              href={'/admin/employee'}
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <AiFillHdd className="w-5 h-5 fill-current text-gray-600" />
              <span>Employee</span>
            </Link>
          </li>
          <li>
            <Link
              rel="noopener noreferrer"
              href={'/admin/position'}
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <AiFillIdcard className="w-5 h-5 fill-current text-gray-600" />
              <span>Position</span>
            </Link>
          </li>
          <li>
            <Link
              rel="noopener noreferrer"
              href={'/admin/shift'}
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <AiFillSchedule className="w-5 h-5 fill-current text-gray-600" />
              <span>Shift</span>
            </Link>
          </li>
          <li>
            <Link
              rel="noopener noreferrer"
              href={'/admin/attendance'}
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <BsFillFileEarmarkPersonFill className="w-5 h-5 fill-current text-gray-600" />
              <span>Attendance</span>
            </Link>
          </li>
        </ul>
        <ul className="pt-4 pb-2 space-y-1 text-sm">
          <li>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <RiLogoutBoxRFill className="w-5 h-5 fill-current text-gray-600" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
