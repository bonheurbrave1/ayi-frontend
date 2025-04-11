import React, { useState } from 'react';

const Settings = () => {
  const [formData, setFormData] = useState({
    username: 'john_doe',
    email: 'johndoe@example.com',
    notifications: true,
    darkMode: false,
  });

  // Handle input change for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle checkbox toggle for settings
  const handleToggle = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Account Settings</h2>

        {/* Profile Settings */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Profile Settings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="username" className="text-lg text-gray-700">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-lg text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Notification Settings</h3>
          <div className="flex items-center space-x-4">
            <label htmlFor="notifications" className="text-lg text-gray-700">Enable Notifications</label>
            <input
              id="notifications"
              name="notifications"
              type="checkbox"
              checked={formData.notifications}
              onChange={handleToggle}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Appearance</h3>
          <div className="flex items-center space-x-4">
            <label htmlFor="darkMode" className="text-lg text-gray-700">Enable Dark Mode</label>
            <input
              id="darkMode"
              name="darkMode"
              type="checkbox"
              checked={formData.darkMode}
              onChange={handleToggle}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Save Settings Button */}
        <div className="mt-8 text-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
