import React, { useState } from "react";
import { Close, EmailOutlined, PasswordOutlined } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { adminLoginSuccess } from "../redux/store/actions/adminAuth"
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin= ({ openAdminModal, closeAdminModal }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // clear error

    try {
      const response = await axios.post("http://localhost:3001/admin-login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200 && response.data.success) {
        // Save the user data in localStorage
        dispatch(adminLoginSuccess())
        navigate('/admin-dashboard')
        toast.success("Admin Login successful!");
      } 
    } catch (error) {
      toast.error("Admin Login Error!");
      console.error("Error during login:", error);
      setError("An error occurred during login. Please try again later.");
    }         
  };      
        
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  if (!openAdminModal) return null;

  return (
    <div className="flex items-center justify-center bg-black bg-opacity-50 fixed inset-0 h-screen">
      <div className="bg-white w-1/3 rounded-md shadow-lg p-6 border-green-700 border-[3px] relative">
        <div>
          <h1 className="font-body font-semibold text-black text-2xl mb-4">Admin Login</h1>
        </div>
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={closeAdminModal}
        >
          <Close />
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative mt-1 font-body shadow-green-700 border-green-700 font-semibold text-black block w-full shadow-md rounded-md">
            <TextField
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              variant="outlined"
              fullWidth
              label="Email address"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailOutlined style={{ width: 30, height: 30 }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="relative mt-1 font-body shadow-green-700 border-green-700 font-semibold text-black block w-full shadow-md rounded-md">
            <TextField
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              variant="outlined"
              fullWidth
              label="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PasswordOutlined style={{ width: 30, height: 30 }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          {error && (
            <p className="text-red-600 text-sm font-body">{error}</p>
          )}

          <div className="pt-3">
            <button
              type="submit"
              className="w-full flex justify-center text-lg tracking-wider font-semibold py-2 px-4 border border-transparent font-body rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={1000} />
    
    </div>
  );
};

export default AdminLogin;