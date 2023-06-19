import React, { useState, useEffect } from "react";
import { ShoppingCart } from "@mui/icons-material";

const Header = () => {
  const [searchtxt, setSearchtxt] = useState("");
  const [isClickMenu, setIsClickMenu] = useState(false);

  const handleAutoComplete = (event) => {
    setSearchtxt(event.target.searchtxt);
  };

  const handleClickHumbager = () => {
    setIsClickMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsClickMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="font-body h-28 bg-gray-200 flex relative">
      <div className="flex flex-1 justify-between items-center">
        <div className="flex items-center ml-10 w-3/6">
          <div>logo</div>
          <input
            className="p-2 rounded ml-10"
            placeholder="Search"
            value={searchtxt}
            onChange={(event) => handleAutoComplete(event)}
          />
        </div>

        <div
          className={`flex flex-1 items-center justify-around opacity-0 sm:opacity-100  ${
            isClickMenu
              ? "flex flex-col mt-80 right-0 transition-all duration-500 bg-green-300 p-2 rounded-bl opacity-100"
              : ""
          }`}
        >
          <React.Fragment>
            <div className={isClickMenu ? "p-2" : ""}>Home</div>
            <div className={isClickMenu ? "p-2" : ""}>About</div>
            <div className={isClickMenu ? "p-2" : ""}>Log in</div>
            <div className={isClickMenu ? "p-2" : ""}>Sign up</div>
            <ShoppingCart className={isClickMenu ? "mt-2" : ""} />
          </React.Fragment>
        </div>
        <div className="flex">
          <button
            onClick={handleClickHumbager}
            className={`flex flex-col absolute right-8 top-12  opacity-100 sm:opacity-0 cursor-pointer`}
          >
            <div
              className={`line1 w-7 h-1 my-0.5 bg-slate-700 rounded transition-all duration-300 ease-in ${
                isClickMenu
                  ? "transform rotate-45 translate-x-1 translate-y-2"
                  : ""
              }`}
            ></div>
            <div
              className={`line2 w-7 h-1 my-0.5 bg-slate-700 rounded transition-opacity duration-300 ease-in ${
                isClickMenu ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`line3 w-7 h-1 my-0.5 bg-slate-700 rounded transition-all duration-300 ease-in ${
                isClickMenu
                  ? "transform -rotate-45 translate-x-1 -translate-y-2"
                  : ""
              }`}
            ></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
