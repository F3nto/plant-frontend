import React, { useState, useRef, useEffect } from "react";
import { ShoppingCart, FavoriteBorderOutlined } from "@mui/icons-material";
import FavoriteModal from "../Modal/FavoriteModal";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [searchtxt, setSearchtxt] = useState("");
  const [isClickMenu, setIsClickMenu] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);

  const [favModal, setIsFavModal] = useState(false);

  const wishListQty = useSelector((state) => state.wishList);
  const [isCurrentRoute, setIsCurrentRoute] = useState(true);

  const navigate = useNavigate();

  const location = useLocation();

  const handleNavigate = () => {
    navigate("/");
    setIsCurrentRoute(true);
  };

  const headerRef = useRef(null);

  const handleAutoComplete = (event) => {
    setSearchtxt(event.target.searchtxt);
  };

  const handleClickHumbager = () => {
    setIsClickMenu((prev) => !prev);
  };

  useEffect(() => {
    setIsCurrentRoute(location.pathname === "/");

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsClickMenu(false);
      }
    };
    const handleScrollDown = () => {
      const scrollPosition = window.scrollY;
      const headerElement = headerRef.current;

      if (headerElement) {
        const headerHeight = headerElement.offsetHeight;

        if (scrollPosition > headerHeight) {
          setIsScrollDown(true);
        } else {
          setIsScrollDown(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScrollDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScrollDown);
    };
  }, [setIsClickMenu, setIsScrollDown, headerRef, location.pathname]);

  const toFavModal = () => {
    setIsFavModal(true);
  };

  return (
    <nav
    ref={headerRef}
      className={`font-body text-white h-24 bg-opacity-75 flex z-10  border-b-2 border-green-300 ${
        isScrollDown
          ? "sticky top-0 text-black bg-primary transform duration-1000 translate-y-0 border-b-2 border-green-300"
          : ""
      }`}
      style={{ position: "fixed", width: "100%" }}
    >
      <div className="flex flex-1 justify-between items-center mx-10">
        <div className="flex items-center" style={{ color: "black" }}>
          <div>logo</div>
          <input
            className="p-2 rounded ml-10"
            placeholder="Search"
            value={searchtxt}
            i
            onChange={(event) => handleAutoComplete(event)}
          />
        </div>

        <div
          className={`flex flex-1 items-center justify-center opacity-0 sm:opacity-100 ${
            isClickMenu
              ? "flex flex-col z-10 mt-80 right-0 transition-all duration-500 bg-green-300 p-2 rounded-bl opacity-100"
              : ""
          }`}
        >
          <button onClick={handleNavigate} className={isClickMenu ? "p-2" : ""}>
            <span
              className={`font-body font-semibold px-5 hover:underline hover:underline-offset-8 hover:text-green-400  border-green-400 transform hover:scale-110 transition-transform ease-out duration-500                
              ${
                isCurrentRoute
                  ? `text-green-400 underline underline-offset-8  border-green-400 `
                  : ""
              }
              `}
            >
              Home
            </span>
          </button>
          <button className={isClickMenu ? "p-2" : ""}>
            <span className="font-body font-semibold px-5 pb-6 hover:text-green-400 hover:underline hover:underline-offset-8 border-green-400 transform hover:scale-110 transition-transform ease-out duration-500">
              About
            </span>
          </button>
          <button className={isClickMenu ? "p-2" : ""}>
            <span className="font-body font-semibold px-5 pb-2 hover:text-green-400 hover:underline hover:underline-offset-8 border-green-400 transform hover:scale-110 transition-transform ease-out duration-500">
              Log in
            </span>
          </button>
          <button className={isClickMenu ? "p-2" : ""}>
            <span className="font-body font-semibold px-5 pb-2 hover:text-green-400 hover:underline hover:underline-offset-8 border-green-400 transform hover:scale-110 transition-transform ease-out duration-500">
              Sign up
            </span>
          </button>
          <button className={isClickMenu ? "p-2" : ""}>
            <span className="font-body font-semibold px-5 pb-2 hover:text-green-400 hover:underline hover:underline-offset-8 border-green-400 transform hover:scale-110 transition-transform ease-out duration-500">
              Log out
            </span>
          </button>
          <div className="flex justify-center items-center ml-20">
            <button className="mx-7">
              <ShoppingCart className={isClickMenu ? "mt-2" : ""} />
            </button>
            <button onClick={toFavModal} className="relative">
              <FavoriteBorderOutlined className={isClickMenu ? "mt-2" : ""} />
              {wishListQty.length !== 0 && wishListQty.length > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-medium bg-secondary-300 text-white">
                  <p className="font-body">{wishListQty.length}</p>
                </span>
              )}
            </button>
          </div>
        </div>
        <div className="flex">
          <button
            onClick={handleClickHumbager}
            className={`flex flex-col absolute right-10 top-9  opacity-100 sm:opacity-0 cursor-pointer`}
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
      {favModal && (
        <FavoriteModal
          openModal={favModal}
          closeModal={() => setIsFavModal(false)}
          navigate = {navigate}
        />
      )}
    </nav>
  );
};

export default Header;
