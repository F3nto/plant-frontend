import React from "react";
import { useLocation } from "react-router-dom";
const IndoorDetail = () => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <div className="h-full">
      <div className="flex justify-between mt-5 mx-4">
        <div className="w-3/4 h-screen">
          <img
            src={item.moreDetail.img1}
            alt=""
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="ml-8">
          <p className="text-lg font-body mb-4 font-bold text-gray-600">
            Indoor Plant Details
          </p>
          <div>
            <span className="font-body font-semibold text-gray-500">Light:</span>
            <p className="mb-2">{item.moreDetail.light}</p>
            <span className="font-body font-semibold text-gray-500">Soil:</span>{" "}
            <p className="mb-2">{item.moreDetail.soil}</p>
            <span className="font-body font-semibold text-gray-500">Water:</span>{" "}
            <p className="mb-2">{item.moreDetail.water}</p>
            <span className="font-body font-semibold text-gray-500">Temperature:</span>{" "}
            <p className="mb-2">{item.moreDetail.temp}</p>
            <span className="font-body font-semibold text-gray-500">Fertilizer:</span>{" "}
            <p className="mb-2">{item.moreDetail.fertilizer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IndoorDetail;
