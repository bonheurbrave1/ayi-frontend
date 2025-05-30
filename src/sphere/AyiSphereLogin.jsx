// AyiSphereLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import logo from "../assets/logo.png";


axios.defaults.baseURL = "http://localhost:5000"

export default function AyiSphereLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("/ayispherelogin", { email, password });

      if (res.data?.token) {
        localStorage.setItem("ayi-sphere-token", res.data.token);
        navigate("/ayi-sphere/community");
      } else {
        setError("Invalid server response");
      }
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-black px-4">
              <div className="absolute top-4 left-4">
                <a href={"/"}>
                  <img src={logo} alt="AYI Group Logo" className="w-20 h-auto" />
                </a>
              </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md text-white p-8 rounded-xl shadow-xl max-w-md w-full space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Welcome Back</h2>

        {error && (
          <div className="bg-red-500 text-white p-2 rounded text-center">
            {error}
          </div>
        )}

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition"
        >
          Sign In
        </button>

        <p className="text-center text-sm mt-2">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/ayi-sphere/register")}
            className="text-blue-300 underline cursor-pointer"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}
