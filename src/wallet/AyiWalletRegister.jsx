import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AyiWalletRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await axios.post("/ayiwalletregister", { email, password });
      setSuccess(res.data.message);
      setTimeout(() => navigate("/ayi-wallet/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl max-w-md w-full text-white space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Register for A-Wallet</h2>
        {error && <p className="bg-red-600 p-2 rounded text-center">{error}</p>}
        {success && <p className="bg-green-600 p-2 rounded text-center">{success}</p>}
        <div>
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 px-4 py-2 bg-black/30 border border-white/20 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 px-4 py-2 bg-black/30 border border-white/20 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-600 py-2 rounded text-white font-bold transition"
        >
          Register
        </button>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <span
            className="text-blue-300 underline cursor-pointer"
            onClick={() => navigate("/ayi-wallet/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
