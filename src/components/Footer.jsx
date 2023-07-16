import React,{useState} from "react";

const Footer = () => {

 const [email, setEmail] = useState("");

 const handleEmail = (event) => {

    setEmail(event.target.value)

 }

  return (
    <footer className="bg-green-500 text-white py-4">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:mr-10">
        <span className="font-body font-bold text-2xl">Plant Project</span>
        <div className="mt-4">
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex items-center mt-4">
          <div className="px-2">
            <img
              src={require("../img/facebook.png")}
              style={{ width: 40, height: 40 }}
              alt=""
            />
          </div>
          <div className="px-2">
            <img
              src={require("../img/instagram.png")}
              style={{ width: 40, height: 40 }}
              alt=""
            />
          </div>
          <div className="px-2">
            <img
              src={require("../img/twitter.png")}
              style={{ width: 40, height: 40 }}
              alt=""
            />
          </div>
          <div className="px-2">
            <img
              src={require("../img/paper-plane.png")}
              style={{ width: 40, height: 40 }}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mt-6 lg:mt-0">
        <h2 className="font-body font-bold text-2xl">Quick View Links</h2>
        <div className="flex flex-col font-body mt-3">
          <h2>Plant Categories</h2>
          <h2>About Indoor Plant</h2>
          <h2>Indoor Plants Categories</h2>
        </div>
      </div>
      <div className="mt-6 lg:mt-0">
        <h2 className="font-body font-semibold text-xl">Join Us for Latest Plants and News!</h2>
        <div className="flex mt-3">
          <input
            placeholder="Email"
            className="bg-white rounded-l px-4 py-2 focus:outline-none text-black"
            value={email}
            onChange={handleEmail}
          />
          <button className="bg-white text-green-500 font-bold font-body rounded-r px-4 py-2 ml-1 focus:outline-none">
            Subscribe
          </button>
        </div>
        <h2 className="font-body font-bold text-2xl mt-6">Payment Available</h2>
        <div className="flex items-center mt-4">
            <div className="px-2">
            <img src = {require("../img/kpay.png")} style={{width:60 , height:60, borderRadius:7}} alt=""/>
            </div>
            <div className="px-2">
            <img src = {require("../img/cbpay.png")} style={{width:60 , height:60, borderRadius:7}} alt=""/>
            </div>
            <div className="px-2">
            <img src = {require("../img/ayapay.png")} style={{width:60 , height:60, borderRadius:7}} alt=""/>
            </div>
            <div className="px-2">
            <img src = {require("../img/wavepay.png")} style={{width:60 , height:60, borderRadius:7}} alt=""/>
            </div>
        </div>
        <p className="text-sm font-body mt-2">
          &copy; {new Date().getFullYear()} Plant Project. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
