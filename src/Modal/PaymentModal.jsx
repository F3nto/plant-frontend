import React, {useState} from "react";
import { Close } from "@mui/icons-material";
import KpayMoal from "./KpayModal";
import WavePayModal from "./WavePayModal";

const PaymentModal = ({ openPaymentModal, closePaymentModal }) => {
    const [showKpayModal, setShowKPayModal] = useState(false)
    const [showWavePayModal, setShowWavePayModal] = useState(false)

    const handleKpay = () => {

        setShowKPayModal(true)

    }

    const closeKpayModal = () => {
        setShowKPayModal(false)

    }

    const handleWavePay = () => {
        setShowWavePayModal(true)

    }

    const closeWavePay = () => {
        setShowWavePayModal(false)

    }
    
  if (!openPaymentModal) return null;

  return (
    <div className="flex items-center justify-center bg-black bg-opacity-50 fixed inset-0 h-screen">
      <div className="bg-white w-1/3 rounded-md shadow-lg p-6 border-green-700 border-[3px] relative">
        <div>
          <h1 className="font-body font-semibold text-black text-2xl mb-4">Payment Method</h1>
        </div>
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={closePaymentModal}
        >
          <Close />
        </button>
        <div className="">
        <button onClick={handleKpay} className="flex items-center hover:bg-slate-200 hover:rounded">
            <img src={require("../img/kpay.png")} style={{width:"20%", height:"20%"}} className="rounded object-cover" alt="" />
            <p className="font-body font-semibold ml-3">KBZ Pay</p>
            </button>
        <button onClick={handleWavePay} className="flex w-full items-center mt-3 hover:bg-slate-200 hover:rounded">
            <img src={require("../img/wavepay.png")} className="h-16 w-20 rounded object-cover" alt="" />
           <p className="font-body font-semibold ml-3">Wave Pay</p>
        </button>
        </div>
          </div>
      <KpayMoal openKpayModal={showKpayModal} closeKpayModal={closeKpayModal} />
      <WavePayModal openWavePay={showWavePayModal} closeWavePay={closeWavePay}/>
    </div>
  );
};

export default PaymentModal;