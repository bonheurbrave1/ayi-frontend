import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';

const initialConversations = [
  {
    id: 1,
    userName: 'Bonheur Ndikumwenayo',
    userHandle: '@bobodev',
    messages: [
      { sender: 'me', content: 'Hey Jane! How are you?', timestamp: '12:05 PM', status: 'seen' },
      { sender: 'other', content: 'I’m doing well, thanks! How about you?', timestamp: '12:06 PM' },
      { sender: 'me', content: 'I’m good, just wanted to catch up.', timestamp: '12:07 PM', status: 'seen' },
    ],
  },
  {
    id: 2,
    userName: 'Alex Nkurunziza',
    userHandle: '@alexbrown',
    messages: [
      { sender: 'other', content: 'Hey! Let’s meet up tomorrow for coffee.', timestamp: '11:00 AM' },
      { sender: 'me', content: 'Sounds great! What time?', timestamp: '11:01 AM', status: 'seen' },
    ],
  },
];

const Messages = () => {
  const [conversations, setConversations] = useState(initialConversations);
  const [selectedConversationId, setSelectedConversationId] = useState(1);
  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);

  const emojiPickerRef = useRef(null);
  const inputRef = useRef(null);

  const selectedConversation = conversations.find(
    (c) => c.id === selectedConversationId
  );

  const handleSendMessage = () => {
    if (!newMessage.trim() && !attachedFile) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const messageContent = `${newMessage.trim()}${attachedFile ? ` (📎 ${attachedFile.name})` : ''}`;

    const updatedConversations = conversations.map((conversation) => {
      if (conversation.id === selectedConversationId) {
        return {
          ...conversation,
          messages: [
            ...conversation.messages,
            {
              sender: 'me',
              content: messageContent,
              timestamp,
              status: 'sent',
            },
          ],
        };
      }
      return conversation;
    });

    setConversations(updatedConversations);
    setNewMessage('');
    setAttachedFile(null);
    setShowEmojiPicker(false);
  };

  const handleEmojiClick = (emojiData) => {
    setNewMessage((prev) => prev + emojiData.emoji);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setAttachedFile(file);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getLastMessageIndexFromMe = () => {
    const msgs = selectedConversation.messages;
    for (let i = msgs.length - 1; i >= 0; i--) {
      if (msgs[i].sender === 'me') return i;
    }
    return -1;
  };

  const lastMessageFromMeIndex = getLastMessageIndexFromMe();

  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/3 bg-white shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Conversations</h2>
        <div className="space-y-4">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 rounded-lg cursor-pointer ${
                conversation.id === selectedConversationId ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedConversationId(conversation.id)}
            >
              <h3 className="font-semibold text-gray-900">{conversation.userName}</h3>
              <p className="text-sm text-gray-600 truncate">
                {conversation.messages[conversation.messages.length - 1].content}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {conversation.messages[conversation.messages.length - 1].timestamp}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="w-2/3 bg-white p-6 shadow-md flex flex-col relative">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          {selectedConversation.userName}
        </h2>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {selectedConversation.messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg text-sm relative ${
                  message.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                }`}
              >
                <div>{message.content}</div>
                <div className="text-xs text-gray-300 mt-1 text-right flex justify-end space-x-2">
                  <span>{message.timestamp}</span>
                  {message.sender === 'me' && (
                    <span className="ml-2">
                      {index === lastMessageFromMeIndex ? '👀 Seen' : '✅ Sent'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emoji Picker */}
        {showEmojiPicker && (
          <div
            ref={emojiPickerRef}
            className="absolute bottom-20 left-4 z-50 shadow-lg"
          >
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}

        {/* Message Input */}
        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={() => setShowEmojiPicker((prev) => !prev)}
            className="p-2 text-xl hover:bg-gray-100 rounded-full"
            title="Emoji Picker"
          >
            😀
          </button>

          <label className="p-2 cursor-pointer hover:bg-gray-100 rounded-full text-xl">
            📎
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          <input
            ref={inputRef}
            type="text"
            className="flex-grow p-3 border border-gray-300 rounded-lg"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onFocus={() => setShowEmojiPicker(true)}
          />

          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>

        {attachedFile && (
          <p className="text-sm text-gray-500 mt-2">Attached: {attachedFile.name}</p>
        )}
      </div>
    </div>
  );
};

export default Messages;
