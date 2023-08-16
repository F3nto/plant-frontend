import React from "react";

const AboutUs = () => {
  return (
   <div className=" bg-gradient-to-r from-white to-green-300 h-full flex">
    <div className="mx-10 mb-10">
      <p className="text-2xl text-center font-semibold font-body text-green-800 mt-14">Lupyo Gyi Garden (Members)</p>
    <div className="flex justify-center items-center ml-20 mt-10">
      <div className="">
        <div className="" >
          <img
            src={require("../img/about/htet.jpg")}
            className="w-1/2 rounded-full shadow-green-500 shadow-md"
            alt=""
          />
        </div>
        <div>
          <p className="font-body font-semibold items-center">
            Mg Htet Naing Oo
          </p>
        </div>
      </div>
      <div className="flex-col">
        <div className="">
          <img
            src={require("../img/about/kyaw.jpg")}
            className="w-1/2 rounded-full shadow-green-500 shadow-md"
            alt=""
          />
        </div>
        <div>
          <p className="font-body font-semibold items-center ml-3">
            Mg Kyaw Zin Oo
          </p>
        </div>
      </div>
      <div className="flex-col">
        <div className="">
          <img
            src={require("../img/about/pyae.jpg")}
            className="w-1/2 rounded-full shadow-green-500 shadow-md"
            alt=""
          />
        </div>
        <div>
          <p className="font-body font-semibold items-center ml-3">
            Mg Pyae Sone Tun
          </p>
        </div>
      </div>
      <div className="flex-col">
        <div className="">
          <img
            src={require("../img/about/kyawgyi.jpg")}
            className="w-1/2 rounded-full shadow-green-500 shadow-md"
            alt=""
          />
        </div>
        <div>
          <p className="font-body font-semibold items-center ml-3">
            Mg Kyw Zin Win Htike
          </p>
        </div>
      </div>
      </div>

      <div className="flex justify-center items-center mt-10">
      <div className="flex-col ml-32">
        <div className="">
          <img
            src={require("../img/about/khin.jpg")}
            className="w-1/2 rounded-full shadow-green-500 shadow-md"
            alt=""
          />
        </div>
        <div>
          <p className="font-body font-semibold items-center ml-3">
            Ma Khin Pyae Sone
          </p>
        </div>
      </div>

      <div className="flex-col">
        <div className="">
          <img
            src={require("../img/about/khaing.jpg")}
            className="w-1/2 rounded-full shadow-green-500 shadow-md"
            alt=""
          />
        </div>
        <div>
          <p className="font-body font-semibold items-center ml-3">
            Ma Khaing Ya Min Lwin
          </p>
        </div>
      </div>

      <div className="flex-col">
        <div className="">
          <img
            src={require("../img/about/mya.jpg")}
            className="w-1/2 rounded-full shadow-green-500 shadow-md"
            alt=""
          />
        </div>
        <div>
          <p className="font-body font-semibold items-center ml-3">
            Ma Mya Phoo Ngone
          </p>
        </div>
      </div>

      </div>

      <h1 className="mt-20 font-body text-xl font-bold">Future Plan</h1>
      <p className="font-semibold font-body text-md">We will develop new functions features in the system like as reality website.</p>

      <h1 className="mt-10 font-body text-xl font-bold">Purpose</h1>
      <p className="font-semibold font-body text-md">We hope to improve the gardening industry of our country by using this system!</p>
      <p className="font-semibold font-body text-md mt-5">To educate customers about the plants their purchasing, including care instructions, sunlight requirements, water needs, and
        potential use, enabling customers to make well-inform decision. 
      </p>

      </div>
      </div>
  );
};

export default AboutUs;
