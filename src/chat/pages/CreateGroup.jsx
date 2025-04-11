import React, { useState } from 'react';

const CreateGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [groupCategory, setGroupCategory] = useState('Technology');
  const [groupImage, setGroupImage] = useState(null);
  const [formError, setFormError] = useState('');

  // Handle group image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setGroupImage(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!groupName || !groupDescription) {
      setFormError('Group name and description are required.');
      return;
    }

    // Reset error message
    setFormError('');

    // Here you would typically send the form data to your backend
    console.log({
      groupName,
      groupDescription,
      groupCategory,
      groupImage,
    });

    // Optionally redirect to the group page (e.g., after successful creation)
    // window.location.href = '/groups';
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Create New Group</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Group Name */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="groupName">
              Group Name
            </label>
            <input
              type="text"
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your group name"
              required
            />
          </div>

          {/* Group Description */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="groupDescription">
              Group Description
            </label>
            <textarea
              id="groupDescription"
              value={groupDescription}
              onChange={(e) => setGroupDescription(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Describe your group"
              required
            />
          </div>

          {/* Group Category */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="groupCategory">
              Group Category
            </label>
            <select
              id="groupCategory"
              value={groupCategory}
              onChange={(e) => setGroupCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="Technology">Technology</option>
              <option value="Sports">Sports</option>
              <option value="Music">Music</option>
              <option value="Art">Art</option>
              <option value="Events">Events</option>
            </select>
          </div>

          {/* Group Image Upload */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="groupImage">
              Group Image (Optional)
            </label>
            <input
              type="file"
              id="groupImage"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {groupImage && (
              <div className="mt-4">
                <img src={groupImage} alt="Group Preview" className="w-32 h-32 object-cover rounded-lg" />
              </div>
            )}
          </div>

          {/* Form Error Message */}
          {formError && <p className="text-red-500 text-sm mb-4">{formError}</p>}

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
