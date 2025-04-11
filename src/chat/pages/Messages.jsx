import React, { useState } from 'react';

// Sample conversations and messages
const conversationsData = [
  {
    id: 1,
    userName: 'Jane Smith',
    userHandle: '@janesmith',
    messages: [
      { sender: 'me', content: 'Hey Jane! How are you?', timestamp: '12:05 PM' },
      { sender: 'other', content: 'I’m doing well, thanks! How about you?', timestamp: '12:06 PM' },
      { sender: 'me', content: 'I’m good, just wanted to catch up.', timestamp: '12:07 PM' },
    ],
  },
  {
    id: 2,
    userName: 'Alex Brown',
    userHandle: '@alexbrown',
    messages: [
      { sender: 'other', content: 'Hey! Let’s meet up tomorrow for coffee.', timestamp: '11:00 AM' },
      { sender: 'me', content: 'Sounds great! What time?', timestamp: '11:01 AM' },
    ],
  },
];

const Messages = () => {
  const [selectedConversationId, setSelectedConversationId] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const selectedConversation = conversationsData.find(
    (conversation) => conversation.id === selectedConversationId
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMessageObject = {
        sender: 'me',
        content: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      selectedConversation.messages.push(newMessageObject);
      setNewMessage('');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar - List of Conversations */}
      <div className="w-1/3 bg-white shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Conversations</h2>
        <div className="space-y-4">
          {conversationsData.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 rounded-lg cursor-pointer ${
                conversation.id === selectedConversationId ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedConversationId(conversation.id)}
            >
              <h3 className="font-semibold text-gray-900">{conversation.userName}</h3>
              <p className="text-sm text-gray-600">{conversation.messages[conversation.messages.length - 1].content}</p>
              <p className="text-xs text-gray-400 mt-1">
                {conversation.messages[conversation.messages.length - 1].timestamp}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="w-2/3 bg-white p-6 shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">{selectedConversation.userName}</h2>
        <div className="h-96 overflow-y-auto mb-6">
          {selectedConversation.messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.sender === 'me' ? 'text-right' : ''}`}>
              <div
                className={`inline-block max-w-xs p-3 rounded-lg text-sm ${
                  message.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.content}
              </div>
              <p className="text-xs text-gray-400">{message.timestamp}</p>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex items-center">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="ml-4 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
