import React, { useState } from 'react';

// Sample data for announcements
const announcementsData = [
  {
    id: 1,
    title: 'New Feature Released: Dark Mode',
    description:
      'We are excited to announce the release of Dark Mode! You can now toggle between light and dark themes for a better reading experience.',
    content:
      'To enable Dark Mode, go to the settings page and toggle the Dark Mode option. We hope this feature makes your experience more comfortable at night!',
    timestamp: '2025-03-20 10:00 AM',
    category: 'Update',
  },
  {
    id: 2,
    title: 'Upcoming Event: Annual Meetup',
    description:
      'Join us for our Annual Meetup! We have exciting speakers and workshops lined up. Don’t miss out on the chance to connect with other members.',
    content:
      'The Annual Meetup will be held on March 30th, 2025. Register now to reserve your spot and get details about the event schedule.',
    timestamp: '2025-03-18 09:30 AM',
    category: 'Event',
  },
  {
    id: 3,
    title: 'System Maintenance: March 25th',
    description:
      'We will be performing system maintenance on March 25th, 2025. During this time, some services may be temporarily unavailable.',
    content:
      'Please plan accordingly, and we apologize for any inconvenience. We will notify you once the maintenance is complete.',
    timestamp: '2025-03-15 08:00 AM',
    category: 'News',
  },
];

const Announcement = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  // Handle clicking on an announcement to show details
  const handleAnnouncementClick = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Announcements</h2>

        {/* Announcement List */}
        <div className="space-y-6">
          {announcementsData.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => handleAnnouncementClick(announcement)}
            >
              <h3 className="font-semibold text-xl text-gray-900">{announcement.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{announcement.description}</p>
              <p className="text-xs text-gray-400 mt-4">{announcement.timestamp}</p>
              <p className="text-xs text-gray-500 mt-2">{announcement.category}</p>
            </div>
          ))}
        </div>

        {/* Announcement Detail View */}
        {selectedAnnouncement && (
          <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900">{selectedAnnouncement.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{selectedAnnouncement.timestamp}</p>
            <div className="mt-6">
              <p className="text-lg text-gray-800">{selectedAnnouncement.content}</p>
            </div>
            <button
              onClick={() => setSelectedAnnouncement(null)}
              className="mt-6 inline-block text-blue-500 hover:text-blue-700 font-semibold"
            >
              Back to announcements
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcement;
