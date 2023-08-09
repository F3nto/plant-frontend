import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AdminFruitDetail = () => {
  const location = useLocation();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});

  const {
    state: { item },
  } = location;

  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty(qty + 1);
  };

  const decQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };
  const handleFieldChange = (field, value) => {
    setEditedData((prevEditedData) => ({
      ...prevEditedData,
      [field]: value,
    }));
  };

  const handleFieldChangeForMoreDetail = (fieldPath, value) => {
    setEditedData((prevEditedData) => ({
      ...prevEditedData,
      moreDetail: {
        ...prevEditedData.moreDetail,
        [fieldPath]: value,
      },
    }));
  };

  useEffect(() => {
    if (!isEditMode) {
      setEditedData(item);
    }
  }, [item]);

  const saveChanges = () => {
    axios
      .patch(`http://localhost:3001/api/v1/fruit/${item._id}`, editedData)
      .then((res) => {
        setEditedData(res.data);
        toggleEditMode();
      })
      .catch((error) => {
        console.error("Error updating flower:", error);
      });
  };

  return (
    <div className="h-auto">
      <div className="flex justify-end mt-4 mr-4">
        {isEditMode ? (
          <button
            className="bg-green-500 px-4 py-2 rounded text-white font-bold"
            onClick={saveChanges}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-blue-500 px-4 py-2 rounded text-white font-bold"
            onClick={toggleEditMode}
          >
            Edit
          </button>
        )}
      </div>

      <div className="flex justify-between mt-10 mx-4">
        <div className="w-1/4 relative">
          <img
            src={item.moreDetail.subImg1}
            alt=""
            className="w-full h-full object-cover rounded shadow-black shadow-md"
          />
        </div>

        <div className="flex-1 ml-8">
        <span className="font-body font-semibold text-gray-500">
              Name:
            </span>
          {isEditMode ? (
            <div className="">
              <input
                type="text"
                className="p-2 border border-green-200"
                value={editedData.name}
                onChange={(e) => handleFieldChange("name", e.target.value)}
              />
            </div>
          ) : (
            <p className="text-lg font-body mb-4 font-bold text-gray-600">
              {item.name}
            </p>
          )}

          <div>
            <span className="font-body font-semibold text-gray-500">
              Price:
            </span>
            {isEditMode ? (
              <div className="">
                <input
                  type="text"
                  className="p-2 border border-green-200"
                  value={editedData ? editedData.price : item.price}
                  onChange={(e) => handleFieldChange("price", e.target.value)}
                />
              </div>
            ) : (
              <p className="text-lg font-body mb-4 font-bold text-gray-600">
                {editedData ? editedData.price : item.price}
              </p>
            )}
             <span className="font-body font-semibold text-gray-500">
              Quantity:
            </span>
            {isEditMode ? (
              <div className="">
                <input
                  type="text"
                  className="p-2 border border-green-200"
                  value={editedData ? editedData.quantity : item.quantity}
                  onChange={(e) => handleFieldChange("quantity", e.target.value)}
                />
              </div>
            ) : (
              <p className="text-lg font-body mb-4 font-bold text-gray-600">
                {editedData ? editedData.quantity : item.quantity}
              </p>
            )}
            <span className="font-body font-semibold text-gray-500">
              Light:
            </span>
            {isEditMode ? (
              <div className="">
                <textarea
                  type="text"
                  className="p-2 border border-green-200 w-full h-28"
                  value={editedData ? editedData.moreDetail?.light : item.moreDetail.light}
                  onChange={(e) =>
                    handleFieldChangeForMoreDetail("light", e.target.value)
                  }
                />
              </div>
            ) : (
              <p className="mb-2">{editedData ? editedData.moreDetail?.light : item.moreDetail.light}</p>
            )}
            <span className="font-body font-semibold text-gray-500">Soil:</span>{" "}
            {isEditMode ? (
              <div className="">
                <textarea
                  type="text"
                  className="p-2 border border-green-200 w-full h-28"
                  value={editedData ? editedData.moreDetail?.soil : item.moreDetail.soil}
                  onChange={(e) =>
                    handleFieldChangeForMoreDetail("soil", e.target.value)
                  }
                />
              </div>
            ) : (
              <p className="mb-2">{editedData ? editedData.moreDetail?.soil : item.moreDetail.soil}</p>
            )}
            <span className="font-body font-semibold text-gray-500">
              Water:
            </span>{" "}
            {isEditMode ? (
              <div className="">
                <textarea
                  type="text"
                  className="p-2 border border-green-200 w-full h-28"
                  value={editedData ? editedData.moreDetail?.water : item.moreDetail.water}
                  onChange={(e) =>
                    handleFieldChangeForMoreDetail("water", e.target.value)
                  }
                />
              </div>
            ) : (
              <p className="mb-2">{editedData ? editedData.moreDetail?.water : item.moreDetail.water}</p>
            )}
            <span className="font-body font-semibold text-gray-500">
              Temperature:
            </span>{" "}
            {isEditMode ? (
              <div className="">
                <textarea
                  type="text"
                  className="p-2 border border-green-200 w-full h-28"
                  value={editedData ? editedData.moreDetail?.temp : item.moreDetail.temp}
                  onChange={(e) =>
                    handleFieldChangeForMoreDetail("temp", e.target.value)
                  }
                />
              </div>
            ) : (
              <p className="mb-2">{editedData ? editedData.moreDetail?.temp : item.moreDetail.temp}</p>
            )}
            <span className="font-body font-semibold text-gray-500">
              Fertilizer:
            </span>{" "}
            {isEditMode ? (
              <div className="">
                <textarea
                  type="text"
                  className="p-2 border border-green-200 w-full h-28"
                  value={editedData ? editedData.moreDetail?.fertilizer : item.moreDetail.fertilizer}
                  onChange={(e) =>
                    handleFieldChangeForMoreDetail("fertilizer", e.target.value)
                  }
                />
              </div>
            ) : (
              <p className="mb-2">{editedData ? editedData.moreDetail?.fertilizer : item.moreDetail.fertilizer}</p>
            )}
          </div>

          <div className="border-b-2" />

          <div className="flex justify-center items-center mt-5 border-b-2">
            <div className="px-3">
              <RemoveCircleOutline
                onClick={decQty}
                style={{ width: 35, height: 35 }}
              />
            </div>
            <p className="font-body text-xl font-semibold">{qty}</p>

            <div className="px-3">
              <AddCircleOutline
                onClick={incQty}
                style={{ width: 35, height: 35 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFruitDetail;
