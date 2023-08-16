import React from "react";
import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const Success = ({ openSuccess, closeSuccess }) => {
  const navigate = useNavigate();

  const handleDone = () => {
  
    navigate("/");
   
  };

  if (!openSuccess) return null;

  return (
    <div className="flex items-center justify-center bg-black bg-opacity-50 fixed inset-0 h-screen">
      <div className="bg-white w-1/3 rounded-md shadow-lg p-6 border-green-700 border-[3px] relative">
      
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={closeSuccess}
        >
          <Close />
        </button>
        <div className="">
            <img src={require("../img/correct.png")} style={{width:50 , height:50, marginLeft:180}} alt=""/>
            <p className="font-body font-semibold text-green-800 text-center">Your Order is successfully completed! We will check the payment and comfirm later!</p>
        </div>
       
        <div className="mt-5 ml-44">
          <button
            onClick={handleDone}
            className="flex justify-center items-center bg-blue-600 rounded hover:bg-slate-500"
          >
            <p className="font-body font-semibold py-2 px-4 text-lg text-white">
              Go Back 
            </p>
          </button>
        </div>
       
      </div>

     
    </div>
  );
};

export default Success;
