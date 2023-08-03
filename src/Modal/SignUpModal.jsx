import React, { useState } from "react";
import {
  Close,
  AccountCircleOutlined,
  EmailOutlined,
  PasswordOutlined,
} from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToUser } from "../redux/store/actions/user";
import { addToEmail } from "../redux/store/actions/email";
import { useDispatch } from "react-redux";

const SignUpModal = ({ openModal, closeModal }) => {
  const [agreed, setAgreed] = useState(false);
  const [passwordStrong, setPasswordStrong] = useState(false);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const isPasswordValid = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password); // password checking
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    if (isPasswordValid(formData.password)) {
      setPasswordStrong(true); // Password is strong
    } else {
      setPasswordStrong(false); // Password is not strong
    }
  };

  const createUser = async () => {
    axios
    .post("http://localhost:3001/signup", {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    })
    .then((response) => {
      if (response.data.success) {
        dispatch(addToUser(formData.username));
        dispatch(addToEmail(formData.email));
        toast.success("Signup successful!");
      }
    })
    .catch((error) => {
      console.log("Create User Error!!!", error);
      toast.error("User already exit!");
    });

  };

 
  const errorToast = () => {
    if(!agreed){
    toast.error("You miss to agreed!!")
    }else if(!passwordStrong){
      toast.error("You miss strong password!!")
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(passwordStrong && agreed){
    createUser()
      .then((res) => {
        console.log(res)
       
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        toast.error(
          "An error occurred during sign-up. Please try again later."
        );
      });
    }else{
      errorToast();
    }
  };
  const handleCheckboxChange = (event) => {
    setAgreed(event.target.checked);
  };

  if (!openModal) return null;

  return (
    <div className="flex items-center justify-center bg-black bg-opacity-50 fixed inset-0 h-screen">
      <div className="bg-white w-1/3 rounded-md shadow-lg p-6 border-green-700 border-[3px] relative">
        <div>
          <h1 className="font-body font-semibold text-black text-2xl mb-4">
            Sign Up
          </h1>
        </div>
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          <Close />
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div
            className={`relative mt-1 shadow-green-700 border-green-700 text-black block w-full shadow-md rounded-md`}
          >
            <TextField
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              variant="outlined"
              fullWidth
              label="Name"
              placeholder="Enter your name"
              value={formData.username}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircleOutlined style={{ width: 30, height: 30 }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>

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

          <p
            className={`font-body text-sm ${
              passwordStrong ? "text-green-800" : "text-red-600"
            }`}
          >
            {passwordStrong
              ? "Password is strong."
              : "Password must be 8 characters including numbers."}
          </p>

          <div className="flex justify-center item-center">
            <div className="-mr-5">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreed}
                    onChange={handleCheckboxChange}
                    name="agreed"
                    color="primary"
                  />
                }
              />
            </div>
            <div className="">
              <p className="font-body font-semibold text-green-800 pt-2">
                I agree with terms and privacy.
              </p>
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              disabled={!agreed && agreed}
              className={`w-full flex justify-center text-lg tracking-wider font-semibold py-2 px-4 border border-transparent font-body rounded-md text-white ${
                agreed && passwordStrong
                  ? "bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  : "bg-green-950"
              }`}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={1000} />
    </div>
  );
};

export default SignUpModal;
