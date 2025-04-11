import React, { useState } from 'react';

const Members = () => {
  // Sample users data
  const members = [
    {
      id: 1,
      name: 'John Doe',
      userName: '@johndoe',
      bio: 'Web Developer and Tech Enthusiast.',
      profilePic: '', // Empty for initials
    },
    {
      id: 2,
      name: 'Jane Smith',
      userName: '@janesmith',
      bio: 'Digital Marketer and Content Creator.',
      profilePic: '', // Empty for initials
    },
    {
      id: 3,
      name: 'Alex Brown',
      userName: '@alexbrown',
      bio: 'Product Manager at TechCorp.',
      profilePic: '', // Empty for initials
    },
  ];

  // State to manage connections
  const [connections, setConnections] = useState({});

  const toggleConnection = (id) => {
    setConnections((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Members</h2>

        {/* Member List */}
        <div className="space-y-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Member Info */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {member.profilePic ? (
                    <img src={member.profilePic} alt={member.name} className="w-full h-full object-cover rounded-full" />
                  ) : (
                    member.name.split(' ')[0].charAt(0) + member.name.split(' ')[1].charAt(0)
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.userName}</p>
                  <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
                </div>
              </div>

              {/* Connection Button */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => toggleConnection(member.id)}
                  className={`${
                    connections[member.id] ? 'bg-green-500' : 'bg-blue-500'
                  } text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-600`}
                >
                  {connections[member.id] ? 'Connected' : 'Connect'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
