import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Close } from "@mui/icons-material";

const FavoriteModal = ({ openModal, closeModal }) => {
  const wishList = useSelector((state) => state.wishList);

  useEffect(() => {
    console.log("Redux data from wishList...", wishList);
  }, [wishList]);

  if (!openModal) return null;

  return (
    <div
      className="flex items-center justify-center bg-black bg-opacity-50 fixed inset-0"
      style={{ height: "100vh" }}
    >
      <div className="bg-white w-1/2 rounded-md shadow-lg  p-6 relative">
        <div>
          <h1 className="font-body font-semibold text-black">
            Your WishList Items
          </h1>
        </div>
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          <Close />
        </button>
        <div className="overflow-y-scroll max-h-96">
          {wishList?.length > 0 ? (
            wishList.map((item, index) => (
              <div key={index} className="flex items-center py-4">
                <div>
                  <img
                    src={item.img}
                    className="w-20 h-20 object-cover rounded-md"
                    alt=""
                  />
                </div>

                <div className="ml-4">
                  <p className="text-black font-body">
                    <span className="text-gray-700"> Name </span> -{" "}
                    {item.plantName}{" "}
                  </p>
                  <p className="text-black font-body">
                    <span className="text-gray-700">Price </span> - {item.price}{" "}
                    MMK
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No items in the wish list.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoriteModal;
