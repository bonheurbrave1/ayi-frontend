import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaUsers, FaBullhorn, FaUserPlus, FaUser } from 'react-icons/fa';
import { IoSettings, IoSettingsOutline } from "react-icons/io5";
import { RiMessage2Fill, RiVipCrownFill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";

import Footer from './components/Footer';


const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 w-64 h-full bg-white p-6 shadow-lg">
        <div className='pb-7'>
        <FaRegUserCircle className=' mx-auto text-gray-300' size={40} />
        <h1 className=' text-sm font-extrabold text-center py-2'>Ndikumwenayo Bonheur</h1>
        <h1 className=' text-center text-sm'>bobodev001@gmail.com</h1>
        </div>
        <ul className="space-y-4">
          <li>
            <Link to="feeds" className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-md">
              <FaUsers size={20} />
              <span>Feeds</span>
            </Link>
          </li>
          <li>
            <Link to="posts" className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-md">
              <IoMdCloudUpload size={20} />
              <span>Posts</span>
            </Link>
          </li>
          <li>
            <Link to="members" className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-md">
              <FaUsers size={20} />
              <span>Members</span>
            </Link>
          </li>
          <li>
            <Link to="messages" className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-md">
              <RiMessage2Fill size={20} />
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link to="announcements" className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-md">
              <FaBullhorn size={20} />
              <span>Announcements</span>
            </Link>
          </li>
          
          <li>
            <Link to="creategroup" className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-md">
              <FaUserPlus size={20} />
              <span>Create Group</span>
            </Link>
          </li>
          <li>
            <Link to="getvip" className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-md">
              <RiVipCrownFill size={20} />
              <span>Get VIP+</span>
            </Link>
          </li>
          <li>
            <Link to="settings" className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-md">
              <IoSettingsOutline size={20} />
              <span>Settings</span>
            </Link>
          </li>
          
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="ml-64 p-6">
        <Outlet />  {/* This is where the child pages will be rendered */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
