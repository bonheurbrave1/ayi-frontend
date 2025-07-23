import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaUsers,
  FaBullhorn,
  FaUserPlus,
  FaRegUserCircle,
} from "react-icons/fa";
import { RiMessage2Fill, RiVipCrownFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdCloudUpload } from "react-icons/io";
import axios from "axios";
import Footer from "./components/Footer";

const Layout = () => {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/user/${userId}`);
        setUser(res.data.user);
        setFormData(res.data.user);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const getVipCategory = (wallet) => {
    if (wallet >= 100000001 && wallet < 500000001) return "VIP+";
    if (wallet >= 20000001 && wallet < 100000001) return "VIP+";
    if (wallet >= 5000001 && wallet < 20000001) return "VIP+";
    if (wallet >= 500001 && wallet < 5000001) return "VIP+";
    if (wallet >= 100000 && wallet < 500001) return "VIP";
    return "Free";
  };

  const getVipColorClass = (category) => {
    switch (category) {
      case "VIP+":
        return "bg-yellow-400 text-white";
      case "VIP":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-300 text-gray-700";
    }
  };

  const vipCategory = user ? getVipCategory(user.wallet) : "Loading...";
  const vipClass = getVipColorClass(vipCategory);

  const handleUpdateProfile = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/user/${userId}`, formData);
      alert("Profile updated successfully!");
      setShowModal(false);
      window.location.reload();
    } catch (err) {
      alert("Failed to update profile.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg overflow-y-auto p-6">
        <div className="pb-7 text-center">
          <FaRegUserCircle className="mx-auto text-gray-300" size={40} />
          {user ? (
            <>
              <h1 className="text-sm font-extrabold py-2">{user.names}</h1>
              <h1 className="text-sm text-gray-500">{user.email}</h1>
              <span
                className={`mt-2 inline-block text-xs font-semibold px-3 py-1 rounded-full ${vipClass}`}
              >
                {vipCategory}
              </span>
            </>
          ) : (
            <>
              <h1 className="text-sm font-extrabold py-2 animate-pulse">
                Loading...
              </h1>
              <h1 className="text-sm text-gray-400 animate-pulse">
                Fetching email...
              </h1>
              <span className="mt-2 inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gray-300 text-gray-600 animate-pulse">
                ...
              </span>
            </>
          )}
        </div>

        <div>
          <button
            onClick={handleUpdateProfile}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Update Profile
          </button>
        </div>

        <ul className="space-y-4 mt-8">
          <li>
            <Link
              to="feeds"
              className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-md"
            >
              <FaUsers size={20} />
              <span>Feeds</span>
            </Link>
          </li>
          <li>
            <Link
              to="posts"
              className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-md"
            >
              <IoMdCloudUpload size={20} />
              <span>Posts</span>
            </Link>
          </li>
          <li>
            <Link
              to="members"
              className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-md"
            >
              <FaUsers size={20} />
              <span>Members</span>
            </Link>
          </li>
          <li>
            <Link
              to="messages"
              className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-md"
            >
              <RiMessage2Fill size={20} />
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link
              to="announcements"
              className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-md"
            >
              <FaBullhorn size={20} />
              <span>Announcements</span>
            </Link>
          </li>
          <li>
            <Link
              to="creategroup"
              className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-md"
            >
              <FaUserPlus size={20} />
              <span>Create Group</span>
            </Link>
          </li>
          <li>
            <Link
              to="getvip"
              className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-md"
            >
              <RiVipCrownFill size={20} />
              <span>Get VIP+</span>
            </Link>
          </li>
          <li>
            <Link
              to="settings"
              className="flex items-center space-x-3 hover:bg-blue-100 p-3 rounded-md"
            >
              <IoSettingsOutline size={20} />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-6">
        <Outlet />
        <Footer />
      </div>

      {/* Update Profile Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Update Profile
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="names"
                value={formData.names || ""}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border p-2 rounded"
              />
              <input
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border p-2 rounded"
              />
              <input
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border p-2 rounded"
              />
              <input
                name="location"
                value={formData.location || ""}
                onChange={handleChange}
                placeholder="Location"
                className="w-full border p-2 rounded"
              />
              <input
                name="nationalId"
                value={formData.nationalId || ""}
                onChange={handleChange}
                placeholder="National ID"
                className="w-full border p-2 rounded"
              />
              <input
                type="date"
                name="bd"
                value={formData.bd?.substring(0, 10) || ""}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <div className="flex justify-end space-x-2 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
