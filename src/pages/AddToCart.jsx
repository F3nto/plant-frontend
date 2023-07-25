import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { removeFromCart } from "../redux/store/actions/addToCart";
import { addToCartQty } from "../redux/store/actions/addToCartQty";

const AddToCart = () => {
  const cart = useSelector((state) => state.addToCart);
  const cartQty = useSelector((state) => state.addToCartQty);

  const dispatch = useDispatch();

  const handleDecreaseQty = (item) => {
    const cartItemQty = cartQty[item._id];
    if (cartItemQty?.quantity > 1) {
      const newQuantity = cartItemQty?.quantity - 1;
      dispatch(addToCartQty(item._id, newQuantity));
    } else if (cartItemQty?.quantity === 1) {
      dispatch(removeFromCart(item._id));
    }
  };

  const handleIncreaseQty = (item) => {
    const cartItemQty = cartQty[item._id];
    const newQuantity = cartItemQty ? cartItemQty?.quantity + 1 : 1;
    dispatch(addToCartQty(item._id, newQuantity));
  };

  return (
    <div className="h-full mx-20">
      <div className="flex justify-center items-center mt-16">
        <p className="font-body text-4xl font-semibold text-secondary-300">
          Your Cart Items
        </p>
      </div>
      {cart.length !== 0 && cart.length > 0 ? (
        <div className="flex items-center justify-around mt-10">
          <div className=" bg-white shadow-lg w-1/2">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border font-body">Product Name</th>
                  <th className="px-4 py-2 border font-body">Qty</th>
                  <th className="px-4 py-2 border font-body">Price</th>
                  <th className="px-4 py-2 border font-body">Total</th>
                </tr>
              </thead>
              {cart.map((item, index) => {
                const cartItemQty = cartQty[item._id];
                const total = cartItemQty?.quantity * parseInt(item.price);

                return (
                  <tbody key={index}>
                    <tr>
                      <th className="px-4 py-2 border font-body flex items-center">
                        <img
                          src={item.subImg}
                          className="w-20 h-20 object-cover rounded-md"
                          alt=""
                        />
                        <p className="pl-4">{item.name}</p>
                      </th>
                      <th className="px-4 py-2 border font-body">
                        <div className="flex items-center justify-center">
                          <div>
                            <RemoveCircle
                              onClick={() => handleDecreaseQty(item)}
                              style={{ width: 30, height: 30, marginLeft: 5 }}
                            />
                          </div>
                          <p className="font-body px-2">
                            {cartItemQty?.quantity}
                          </p>
                          <div>
                            <AddCircle
                              onClick={() => handleIncreaseQty(item)}
                              style={{ width: 30, height: 30, marginRight: 5 }}
                            />
                          </div>
                        </div>
                      </th>
                      <th className="px-4 py-2 border font-body">
                        {item.price}
                      </th>
                      <th className="px-4 py-2 border font-body">{total}</th>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <div className="flex">
            <div className=" bg-white shadow-lg w-1/2">
              <table className="table-auto w-full border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border font-body">Cart Total</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>There is no item in your cart</p>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
