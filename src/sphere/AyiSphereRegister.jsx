import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";


export default function AyiSphereRegister() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("/ayishpereregister", formData);
      alert(res.data.message); // success message
      navigate("/ayi-sphere/login");
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Registration failed");
      } else {
        setError("Server error");
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
        <h2 className="text-2xl font-bold text-center">Create Your Account</h2>
        {error && (
          <div className="bg-red-500 text-white p-2 rounded text-center">
            {error}
          </div>
        )}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            required
            className="w-full px-4 py-2 rounded bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded transition"
        >
          Register
        </button>
        <p className="text-center text-sm mt-2">
          Already have an account?{" "}
          <span
            className="text-blue-300 underline cursor-pointer"
            onClick={() => navigate("/ayi-sphere/login")}
          >
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
}
