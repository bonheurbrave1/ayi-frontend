import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  auth,
  provider,
  messagesRef,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import googleimage from "../assets/google.png";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function ChatRoom() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Login with Google
  const login = () => {
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user);
    });
  };

  // Logout
  const logout = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  // Handle message sending
  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      await addDoc(messagesRef, {
        text: message,
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        timestamp: new Date(),
      });
      setMessage("");
    }
  };

  // Real-time message updates
  useEffect(() => {
    const q = query(messagesRef, orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesArray = [];
      querySnapshot.forEach((doc) => {
        messagesArray.push(doc.data());
      });
      setMessages(messagesArray);
    });

    return () => unsubscribe();
  }, []);

  const googleColors = {
    googleBlue: "#4285F4",
    googleRed: "#EA4335",
    googleYellow: "#FBBC05",
    googleGreen: "#34A853",
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <div>
          {!user ? (
            <>
              <Navbar />
              <div className="flex justify-center items-center pt-10 flex-col px-4 sm:px-8 lg:px-16">
                <img src={logo} alt="no internet connections" width={200} />
                <h1
                  className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-center py-10"
                  style={{ fontFamily: "Roboto" }}
                >
                  Welcome to Ayi Chat
                </h1>
                <h1
                  className="font-extralight pb-10 text-xl sm:text-2xl"
                  style={{ fontFamily: "arial" }}
                >
                  Your Space, Your Voice, Our Community.
                </h1>
                <div className="flex w-full justify-center">
                  <button
                    onClick={login}
                    className="flex items-center justify-center w-full sm:w-3/4 md:w-1/2 py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg focus:outline-none"
                    style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                  >
                    {/* Google Logo */}
                    <img
                      src={googleimage}
                      alt="Google logo"
                      className="w-10 mr-3"
                    />
                    {/* Text */}
                    <span className="text-gray-800 font-semibold text-lg">
                      Continue with Google
                    </span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col space-y-4 container mx-auto p-4 sm:p-6 lg:p-8">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl sm:text-2xl font-semibold">AYI Group Chat-Room</h1>
                <button
                  onClick={logout}
                  className="bg-red-500 p-2 rounded-lg text-white hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>

              {/* Messages */}
              <div className="space-y-4 overflow-y-auto h-96 p-4 bg-gray-800 rounded-lg">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-start space-x-3 ${
                      msg.uid === user?.uid ? "justify-end" : ""
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {msg.uid !== user?.uid && (
                      <img
                        src={msg.photoURL}
                        alt="user profile"
                        className="w-8 h-8 rounded-full"
                      />
                    )}

                    <div
                      className={`p-3 rounded-lg ${
                        msg.uid === user?.uid ? "bg-blue-500" : "bg-gray-700"
                      }`}
                    >
                      <span className="font-semibold">{msg.displayName}</span>
                      <p>{msg.text}</p>
                    </div>

                    {msg.uid === user?.uid && (
                      <img
                        src={msg.photoURL}
                        alt="user profile"
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Message Input */}
              <form
                onSubmit={sendMessage}
                className="flex items-center space-x-2 mt-4"
              >
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 p-3 rounded-lg bg-gray-700 text-white"
                  placeholder="Type a message..."
                />
                <button
                  type="submit"
                  className="bg-blue-500 p-3 rounded-lg text-white hover:bg-blue-700 transition"
                >
                  Send
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ChatRoom;
