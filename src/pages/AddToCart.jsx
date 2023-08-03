import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { removeFromCart } from "../redux/store/actions/addToCart";
import { addToCartQty } from "../redux/store/actions/addToCartQty";
import myanmarData from "../myanmar.json";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import CheckOutModal from "../Modal/CheckOutModal";

const AddToCart = () => {
  const cart = useSelector((state) => state.addToCart);
  const cartQty = useSelector((state) => state.addToCartQty);

  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [otherAddr, setOtherAddr] = useState("");
  const [stateError, setStateError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  const [checkOutModal, setCheckOutModal] = useState(false);
  const [voucherData, setVoucherData] = useState(null);

  const navigate = useNavigate();

  const states = myanmarData.states;
  const citiesByState = selectedState
    ? myanmarData.cities[selectedState.value]
    : [];
  const citiesOptions = selectedState
    ? citiesByState.map((city) => ({ value: city, label: city }))
    : [];

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedCity(null);
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  const handleFullAddr = (event) => {
    setOtherAddr(event.target.value);
  };

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

  const allTotal = cart.reduce((total, item) => {
    const cartItemQty = cartQty[item._id];
    const itemTotal = cartItemQty?.quantity * parseInt(item.price);
    return total + itemTotal;
  }, 0);

  const handleCheckOut = () => {
    if (selectedState === null) {
      setStateError(true);
    } else {
      setStateError(false);
    }
  
    if (selectedCity === null) {
      setCityError(true);
    } else {
      setCityError(false);
    }
  
    if (otherAddr.trim() === "") {
      setAddressError(true);
    } else {
      setAddressError(false);
    }
  
    if (selectedState !== null && selectedCity !== null && otherAddr.trim() !== "") {
      const dataForVoucher = {
        items: cart.map(item => ({
          subImg: item.subImg,
          name: item.name,
          price: item.price,
          quantity: cartQty[item._id]?.quantity,
          total: cartQty[item._id]?.quantity * parseInt(item.price),
          
        })),
        allTotal : allTotal,
        selectedState: selectedState.value,
        selectedCity: selectedCity.value,
        otherAddr: otherAddr.trim(),
      };
  
      setCheckOutModal(true);
      setVoucherData(dataForVoucher);
    }
  };
  

  return (
    <div className="h-full bg-gradient-to-r from-white to-gray-300" style = {{minHeight:"110vh"}}>
      <div className="flex justify-center items-center">
        <p className="font-body text-4xl font-semibold text-secondary-300 mt-16">
          Your Cart Items
        </p>
      </div>
      {cart.length !== 0 && cart.length > 0 ? (
        <div className="flex justify-around mt-10">
          <div className=" bg-white shadow-lg rounded-md border-[2px] border-green-500">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-green-700">
                  <th className="px-4 py-2 border font-body text-white">Product Name</th>
                  <th className="px-4 py-2 border font-body text-white">Qty</th>
                  <th className="px-4 py-2 border font-body text-white">Price</th>
                  <th className="px-4 py-2 border font-body text-white">Total</th>
                </tr>
              </thead>
    
              {cart.map((item, index) => {
                const cartItemQty = cartQty[item._id];
                const total = cartItemQty?.quantity * parseInt(item.price);

                return (
                  <tbody key={index}>
                    <tr>
                      <th className="px-4 py-2 border font-body flex items-center ">
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
                        {item.price} MMK
                      </th>
                      <th className="px-4 py-2 border font-body">
                        {total} MMK
                      </th>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>

          <div class="bg-white shadow-lg rounded-lg p-6 w-96 border-[2px] border-green-500">
            <div className="">
              <h2 className="text-xl font-semibold font-body">Cart Totals</h2>
            </div>
            <div className="flex justify-between items-center mt-10">
              <div>
                <p className="font-body font-semibold text-xl">Total : </p>
              </div>
              <div>
                <p className="text-xl font-body font-semibold">
                  {allTotal} MMK
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="font-body font-semibold text-xl">Shipping : </p>
              </div>
              <div>
                <p className="font-body text-base font-semibold">
                  Shipping to Myanmar
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div>
                <p className="font-body font-semibold text-xl">Address : </p>
              </div>
              <div className="flex flex-col">
                <div className="border rounded-lg  w-56">
                  <Select
                    value={selectedState}
                    className={`font-bold text-sm text-black ${
                      stateError ? "border-red-500 z-20" : ""
                    }`}
                    onChange={handleStateChange}
                    options={states.map((state) => ({
                      value: state,
                      label: state,
                    }))}
                    placeholder="State/Region"
                  />
                  {stateError && (
                    <p className="text-red-500 text-xs mt-1">
                      Please select a state.
                    </p>
                  )}
                </div>
                <div className="border rounded-lg mt-4 w-56">
                  <Select
                    value={selectedCity}
                    className={`font-bold text-sm text-black ${
                      cityError ? "border-red-500" : ""
                    }`}
                    onChange={handleCityChange}
                    options={citiesOptions}
                    placeholder="City"
                  />
                  {cityError && (
                    <p className="text-red-500 text-xs mt-1">
                      Please select a city.
                    </p>
                  )}
                </div>
                <div
                  className={`rounded-lg mt-4 relative w-56 
      
                  `}
                >
                  <span
                    className={`absolute top-0 left-2 -mt-2 px-1 text-xs bg-white text-green-700`}
                  >
                    Full address
                  </span>
                  <input
                    className={`h-10 w-56 p-2 text-sm  shadow-black shadow-sm ${
                      addressError ? "border-red-500 border-[1px] shadow-black shadow-sm" : " "
                    }`}
                    placeholder="Village/Quarters/Street"
                    value={otherAddr}
                    onChange={handleFullAddr}
                  />
                  {addressError && (
                    <p className="text-red-500 text-xs mt-1">
                      Please enter the address.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={handleCheckOut}
              className=" bg-green-700 py-3 px-3 flex justify-center items-center mt-7 rounded ml-10 hover:bg-gray-500 shadow-green-500 shadow-md"
            >
              <p className="font-body text-lg tracking-wide font-semibold text-white">
                PROCEED TO CHECKOUT
              </p>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>There is no item in your cart</p>
        </div>
      )}
      <CheckOutModal
        openModal={checkOutModal}
        closeModal={() => setCheckOutModal(false)}
        voucherData = {voucherData}
        navigate = {navigate}
       />
    </div>
  );
};

export default AddToCart;
