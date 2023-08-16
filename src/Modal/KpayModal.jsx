import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import Success from "./Success";
import { clearCart } from "../redux/store/actions/addToCart";

const KpayMoal = ({ openKpayModal, closeKpayModal }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const dispatch = useDispatch();

  const handleDone = () => {
   
    
        dispatch(clearCart());
        setShowSuccessModal(true);
    
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  if (!openKpayModal) return null;

  return (
    <div className="flex items-center justify-center bg-black bg-opacity-50 fixed inset-0 h-screen">
      <div className="bg-white w-1/3 rounded-md shadow-lg p-6 border-green-700 border-[3px] relative">
        <div>
          <h1 className="font-body font-semibold text-black text-2xl mb-4">
            Payment Method
          </h1>
        </div>
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={closeKpayModal}
        >
          <Close />
        </button>

        <img src={require("../img/kaypaynewscan.jpg")} alt="" />
        <div className="mt-5 ml-44">
          <button
            onClick={handleDone}
            className="flex justify-center items-center bg-blue-600 rounded hover:bg-slate-500"
          >
            <p className="font-body font-semibold py-2 px-4 text-lg text-white">
              Done
            </p>
          </button>
        </div>
      </div>
      <Success
        openSuccess={showSuccessModal}
        closeSuccess={closeSuccessModal}
      />
    </div>
  );
};

export default KpayMoal;
