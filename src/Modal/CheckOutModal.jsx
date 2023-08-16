import React, {useState} from "react";
import { Close } from "@mui/icons-material";
import PaymentModal from "./PaymentModal";

const CheckOutModal = ({ openModal, closeModal, voucherData }) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  if (!openModal) return null;

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-GB');


  const handlePaymentModal = () => {
    setShowPaymentModal(false)
  }

  const handlePayment = () => {

    setShowPaymentModal(true);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-1/3 rounded-md shadow-lg p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={closeModal}
        >
          <Close />
        </button>
        <div>
          <h1 className="text-xl font-semibold font-body text-center text-black">
            Checkout Voucher
          </h1>
        </div>
        {voucherData && voucherData.items && (
          <div className="overflow-y-scroll max-h-64 mt-4">
            {voucherData.items.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <div className="">
                  <img
                    src={item.subImg}
                    className="object-cover w-20 h-24  rounded-md"
                    alt=""
                  />
                </div>
                <div className="ml-10">
                  <p className="font-semibold font-body">
                    <span className="font-semibold font-body text-gray-600">
                      Plant:
                    </span>{" "}
                    {item.name}
                  </p>
                  <p className="font-semibold font-body">
                    <span className="font-semibold font-body text-gray-600">
                      Price:
                    </span>{" "}
                    {item.price}
                  </p>
                  <p className="font-semibold font-body">
                    <span className="font-semibold font-body text-gray-600">
                      Quantity:
                    </span>{" "}
                    {item.quantity}
                  </p>
                  <p className="font-semibold font-body">
                    <span className="font-semibold font-body text-gray-600">
                      Total:
                    </span>{" "}
                    {item.total}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex">
          <div>
            <p className="font-semibold font-body">
              <span className="font-semibold font-body text-gray-600">
                Total Price:
              </span>{" "}
              {voucherData?.allTotal} MMK
            </p>
            <p className="font-semibold font-body">
              <span className="font-semibold font-body text-gray-600">
                Date:
              </span>{" "}
              {formattedDate}
            </p>
          </div>
          <div className="ml-5">
            <p className="font-semibold font-body">
              <span className="font-semibold font-body text-gray-600">
                State/Region:
              </span>{" "}
              {voucherData?.selectedState}
            </p>
            <p className="font-semibold font-body">
              <span className="font-semibold font-body text-gray-600">
                City/Town:
              </span>{" "}
              {voucherData?.selectedCity}
            </p>
            <p className="font-semibold font-body">
              <span className="font-semibold font-body text-gray-600">
                Address:
              </span>{" "}
              {voucherData?.otherAddr}
            </p>
            
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handlePayment}
            className="px-4 py-2 mr-2 font-semibold text-white bg-green-700 rounded hover:bg-green-600 focus:outline-none"
          >
            Proceed to Payment
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-2 font-semibold text-white bg-red-700 rounded hover:bg-red-600 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
      <PaymentModal openPaymentModal={showPaymentModal} closePaymentModal = {handlePaymentModal} />
    </div>
  );
};
export default CheckOutModal;
