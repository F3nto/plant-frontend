import React from "react";
import { useSelector } from "react-redux";
import { Close } from "@mui/icons-material";

const FavoriteModal = ({ openModal, closeModal, navigate }) => {
  const wishList = useSelector((state) => state.wishList);

  if (!openModal) return null;

  const handleClickWishListItem = (item) => {
    console.log("wishlist item to go detail route...", item);

    const queryParams = {
      _id: item._id,
      name: item.name,
      price: item.price,
      light: item.moreDetail.light,
      soil: item.moreDetail.soil,
      water: item.moreDetail.water,
      temp: item.moreDetail.temp,
      fertilizer: item.moreDetail.fertilizer,
    };

    let url = "";

    if (item.type === "indplant") {
       url = `/indoor-plant-detail?${new URLSearchParams(
        queryParams
      ).toString()}`;
    } else if (item.type === "fruit") {
       url = `/fruit-detail?${new URLSearchParams(
        queryParams
      ).toString()}`;
    }

    navigate(`${url}`, { state: { item } });
  };

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
              
                <button
                  onClick={() => handleClickWishListItem(item)}
                  key={index}
                  className="flex items-center py-4"
                >
                  <div>
                    <img
                      src={item.subImg}
                      className="w-20 h-20 object-cover rounded-md"
                      alt=""
                    />
                  </div>

                  <div className="ml-4 flex flex-col">
                    <div className="flex">
                    <p className="text-black font-body">
                      <span className="text-secondary-200">Name </span> -{" "}
                      {item.name}
                    </p>
                    </div>
                    <div className="flex">
                    <p className="text-black font-body">
                      <span className="text-secondary-200">Price </span> -{" "}
                      {item.price} MMK
                    </p>
                    </div>
                  </div>
                </button>
              
            ))
          ) : (
            <div className="flex justify-center items-center">
            <p className="text-black">No items in your wish list.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoriteModal;
