import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FavoriteBorderOutlined,
  RemoveCircleOutline,
  AddCircleOutline,
} from "@mui/icons-material";
import {
  addToWishList,
  removeFromWishList,
} from "../redux/store/actions/wishList";
import { addToCart } from "../redux/store/actions/addToCart";
import { addToCartQty } from "../redux/store/actions/addToCartQty";

const FlowerDetail = () => {
  const location = useLocation();
  const {
    state: { item },
  } = location;

  console.log("Fruit detail item...", item);

  const wishList = useSelector((state) => state.wishList);
  const cartQty = useSelector((state) => state.addToCartQty);
  const cart = useSelector((state) => state.addToCart);

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const incQty = () => {
    setQty(qty + 1);
  };

  const decQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const handleFavBtn = (item) => {
    if (wishList.find((wishItem) => wishItem._id === item._id)) {
      dispatch(removeFromWishList(item._id));
    } else {
      dispatch(addToWishList(item));
    }
  };

  const handleCart = (item) => {
    const existingCartItem = cart.find((cartItem) => cartItem._id === item._id);

    if (existingCartItem) {
      const cartItemQty = cartQty[item._id];
      const newQuantity = cartItemQty ? cartItemQty.quantity + qty : qty;
      dispatch(addToCartQty(item._id, newQuantity));
    } else {
      dispatch(addToCart(item));
      dispatch(addToCartQty(item._id, qty));
    }
  };
  return (
    <div className="h-auto">
      <div className="flex justify-between mt-10 mx-4">
        <div className="w-3/4 relative">
          <img
            src={item.moreDetail.subImg1}
            alt=""
            className="w-full h-full object-cover rounded shadow-black shadow-md"
          />
          <div className="absolute top-3 right-4">
            <button
              onClick={() => handleFavBtn(item)}
              className="ml-4 w-10 h-10 z-10 rounded-full shadow-green-700 shadow-sm bg-green-200 flex justify-center items-center"
            >
              {wishList.find((wishItem) => wishItem._id === item._id) ? (
                <img
                  src={require("../img/icons/lover.png")}
                  style={{ width: 25, height: 25 }}
                  alt=""
                />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </button>
          </div>
        </div>

        <div className="ml-8 ">
          <p className="text-lg font-body mb-4 font-bold text-gray-600">
            {item.name}
          </p>
          <div>
            <span className="font-body font-semibold text-gray-500">
              Light:
            </span>
            <p className="mb-2">{item.moreDetail.light}</p>
            <span className="font-body font-semibold text-gray-500">
              Soil:
            </span>{" "}
            <p className="mb-2">{item.moreDetail.soil}</p>
            <span className="font-body font-semibold text-gray-500">
              Water:
            </span>{" "}
            <p className="mb-2">{item.moreDetail.water}</p>
            <span className="font-body font-semibold text-gray-500">
              Temperature:
            </span>{" "}
            <p className="mb-2">{item.moreDetail.temp}</p>
            <span className="font-body font-semibold text-gray-500">
              Fertilizer:
            </span>{" "}
            <p className="mb-2">{item.moreDetail.fertilizer}</p>
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
            <button
              onClick={() => handleCart(item)}
              className="px-5 py-3 bg-green-600 rounded"
            >
              <p className="font-semibold font-body text-xl text-white">
                Add To Cart
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerDetail;
