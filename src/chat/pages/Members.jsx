import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PAGE_SIZE = 5;

const Members = () => {
  const [members, setMembers] = useState([]);
  const [displayedMembers, setDisplayedMembers] = useState([]);
  const [connections, setConnections] = useState({});
  const [connectedUsers, setConnectedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConnections, setShowConnections] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const userId = localStorage.getItem('userId');

  const getVipCategory = (wallet = 0) => {
    if (wallet >= 100000001 && wallet < 500000001) return 'VIP3+';
    if (wallet >= 20000001 && wallet < 100000001) return 'VIP2+';
    if (wallet >= 5000001 && wallet < 20000001) return 'VIP1+';
    if (wallet >= 500001 && wallet < 5000001) return 'VIP+';
    if (wallet >= 100000 && wallet < 500001) return 'VIP';
    return 'Free';
  };

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('/api/users');
        const allUsers = response.data.users || [];

        const currentUser = allUsers.find((user) => user._id === userId);
        const currentConnections = currentUser?.connections || [];

        const connectionMap = {};
        const connected = [];

        currentConnections.forEach((id) => {
          connectionMap[id] = true;
          const connectedUser = allUsers.find((u) => u._id === id);
          if (connectedUser) connected.push(connectedUser);
        });

        const connectedIds = new Set(currentConnections);
        const filteredUsers = allUsers.filter(
          (user) => user._id !== userId && !connectedIds.has(user._id)
        );

        setConnections(connectionMap);
        setConnectedUsers(connected);
        setMembers(filteredUsers);
        setDisplayedMembers(filteredUsers.slice(0, PAGE_SIZE));
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [userId]);

  const toggleConnection = async (targetId) => {
    try {
      await axios.post(`/api/user/${userId}/connect`, { targetId });

      setConnections((prev) => {
        const updated = { ...prev, [targetId]: !prev[targetId] };

        if (updated[targetId]) {
          const newlyConnected = members.find((u) => u._id === targetId);
          if (newlyConnected) {
            setConnectedUsers((prev) => [...prev, newlyConnected]);
            setMembers((prev) => prev.filter((u) => u._id !== targetId));
          }
        } else {
          const removedUser = connectedUsers.find((u) => u._id === targetId);
          if (removedUser) {
            setMembers((prev) => [...prev, removedUser]);
            setConnectedUsers((prev) => prev.filter((u) => u._id !== targetId));
          }
        }

        return updated;
      });
    } catch (error) {
      console.error('Connection toggle error:', error);
      alert('Failed to update connection.');
    }
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const newSlice = members.slice(0, nextPage * PAGE_SIZE);
    setDisplayedMembers(newSlice);
    setCurrentPage(nextPage);
  };

  const filteredMembers = displayedMembers.filter((m) =>
    m.names?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMember(null);
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-xl text-gray-600">Loading members...</div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Members</h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search members..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md"
        />

        {/* Show My Connections */}
        <div className="mb-8">
          <button
            onClick={() => setShowConnections((prev) => !prev)}
            className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-md mb-4 hover:bg-purple-700 transition-colors"
          >
            {showConnections ? 'Hide My Connections' : `Show My Connections (${connectedUsers.length})`}
          </button>

          {showConnections && (
            <div className="bg-white rounded-md shadow-md p-4 max-h-72 overflow-y-auto">
              {connectedUsers.length > 0 ? (
                connectedUsers.map((member) => (
                  <div
                    key={member._id}
                    className="flex items-center justify-between py-2 border-b last:border-b-0"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                        {member.profilePic ? (
                          <img
                            src={member.profilePic}
                            alt={member.names}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-white font-bold">
                            {(member.names?.split(' ')[0]?.charAt(0) || '') +
                              (member.names?.split(' ')[1]?.charAt(0) || '')}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{member.names}</p>
                        <p className="text-sm text-gray-500">{member.email}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded">Invite to Chat</button>
                      <button
                        onClick={() => toggleConnection(member._id)}
                        className="text-red-500 font-semibold hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500">No connections yet.</div>
              )}
            </div>
          )}
        </div>

        {/* All Members List */}
        <div className="space-y-6">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member) => (
              <div
                key={member._id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-xl overflow-hidden cursor-pointer"
                    onClick={() => openModal(member)}
                  >
                    {member.profilePic ? (
                      <img
                        src={member.profilePic}
                        alt={member.names}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      (member.names?.split(' ')[0]?.charAt(0) || '') +
                      (member.names?.split(' ')[1]?.charAt(0) || '')
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900">{member.names}</h3>
                    <p className="text-sm text-gray-500">{member.email}</p>
                    <p className="text-sm text-gray-600 mt-1">{member.phone}</p>
                    <p className="text-sm text-purple-600 font-semibold mt-1">
                      VIP Class: {getVipCategory(member.wallet)}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex justify-end items-center gap-3">
                  <span className="text-sm text-gray-500">
                    {connections[member._id] ? '1 Connection' : '0 Connections'}
                  </span>
                  <button
                    onClick={() => toggleConnection(member._id)}
                    className={`${
                      connections[member._id] ? 'bg-green-500' : 'bg-blue-500'
                    } text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 hover:opacity-90`}
                  >
                    {connections[member._id] ? 'Connected' : 'Connect'}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-lg text-gray-600">
              No members match your search.
            </div>
          )}
        </div>

        {/* Load More Button */}
        {members.length > displayedMembers.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Modal for Member Details */}
      {showModal && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-md w-full relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600">
              ×
            </button>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={selectedMember.profilePic || '/default-avatar.png'}
                alt={selectedMember.names}
                className="w-24 h-24 rounded-full object-cover"
              />
              <h2 className="text-xl font-semibold">{selectedMember.names}</h2>
              <p>Email: {selectedMember.email}</p>
              <p>Phone: {selectedMember.phone}</p>
              <p>VIP Class: {getVipCategory(selectedMember.wallet)}</p>
              <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                Invite to Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;
