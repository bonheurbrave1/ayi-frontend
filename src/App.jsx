import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import GoogleOAuthProvider
import Login from "./pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Settings from "./pages/Settings";
import AccountPage from "./pages/AccountPage";
import ChatRoom from "./pages/ChatRoom";
import CommunityPage from "./chat/Community";
import LoginForm from "./chat/pages/LoginForm";
import FeedPage from "./chat/pages/FeedPage";
import Messages from "./chat/pages/Messages";
import Members from "./chat/pages/Members";
import Announcement from "./chat/pages/Announcement";
import CreateGroup from "./chat/pages/CreateGroup";
import GetVip from "./chat/pages/GetVip";
import PostManagementPage from "./chat/pages/PostManagementPage";
import WalletLogin from "./pages/WalletLogin";
import WalletPage from "./pages/WalletPage";

// PrivateRoute component for protected routes
const PrivateRoute = ({ element }) => {
  // Check if the user is logged in by verifying the token in localStorage
  const token = localStorage.getItem("token");

  // If no token is found, redirect to the login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If token is found, render the requested page
  return element;
};

function App() {
  return (
    <GoogleOAuthProvider clientId="project-833543702694">
      <div>
        <div>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegistrationPage />} />

            {/* Private Routes (Protected by PrivateRoute component) */}
            <Route path="/" element={<PrivateRoute element={<Homepage />} />} />
            <Route
              path="/account-page"
              element={<PrivateRoute element={<AccountPage />} />}
            />
            <Route
              path="/ayi-chat-room"
              element={<PrivateRoute element={<ChatRoom />} />}
            />
            <Route
              path="/ayi-community"
              element={<PrivateRoute element={<CommunityPage />} />}
            >
              <Route
                path="feeds"
                element={<PrivateRoute element={<FeedPage />} />}
              />
              <Route
                path="posts"
                element={<PrivateRoute element={<PostManagementPage />} />}
              />
              <Route
                path="messages"
                element={<PrivateRoute element={<Messages />} />}
              />
              <Route
                path="members"
                element={<PrivateRoute element={<Members />} />}
              />
              <Route
                path="announcements"
                element={<PrivateRoute element={<Announcement />} />}
              />
              <Route
                path="creategroup"
                element={<PrivateRoute element={<CreateGroup />} />}
              />
              <Route
                path="getvip"
                element={<PrivateRoute element={<GetVip />} />}
              />
              <Route
                path="settings"
                element={<PrivateRoute element={<Settings />} />}
              />
            </Route>
            <Route path="/ayi-wallet">
              <Route path="wallet-login" element={<WalletLogin />} />
              <Route path="wallet" element={<WalletPage />} />
            </Route>

            {/* Catch-all Route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
