import React, { useState, useRef, useEffect } from "react";
import { ShoppingCart, FavoriteBorderOutlined } from "@mui/icons-material";
import FavoriteModal from "../Modal/FavoriteModal";
import SignUpModal from "../Modal/SignUpModal";
import LoginModal from "../Modal/LoginModal";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";


const Header = () => {
  const [searchtxt, setSearchtxt] = useState("");
  const [isClickMenu, setIsClickMenu] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);

  const [favModal, setIsFavModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const wishListQty = useSelector((state) => state.wishList);
  const cartQty = useSelector((state) => state.addToCart);
  const [isCurrentRoute, setIsCurrentRoute] = useState(true);
  const [isSignUpModal, setIsSignUpModal] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  const user = useSelector((state) => state.addToUser);
  const email = useSelector((state) => state.addToEmail);

  const handleNavigate = () => {
    navigate("/");
    setIsCurrentRoute(true);
  };

  const handleAddToCart = () => {
    navigate("/add-to-cart");
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

  const toSignUpModal = () => {
    setSignUpModal(true); // go to modal
    setIsSignUpModal(true);
    setIsCurrentRoute(false);
  };
  const handleCloseSignUpModal = () => {
    setSignUpModal(false);
    setIsSignUpModal(false);
    setIsCurrentRoute(true);
  };

  const toLoginModal = () => {
    setLoginModal(true);
    setIsLoginModal(true);
    setIsCurrentRoute(false);
  }

  const handleCloseLoginModal = () => {
    setLoginModal(false);
    setIsLoginModal(false);
    setIsCurrentRoute(false);

  }

  const handleUserMenu = () => {
    setIsUserMenuOpen((prev) => !prev);
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
          <button onClick={toLoginModal} className={isClickMenu ? "p-2" : ""}>
            <span className={`font-body font-semibold px-5 pb-2 hover:text-green-400 hover:underline hover:underline-offset-8 border-green-400 transform hover:scale-110 transition-transform ease-out duration-500
             ${
              isLoginModal
                ? `text-green-400 underline underline-offset-8  border-green-400 `
                : ""
            }`}>
         
              Log in
            </span>
          </button>
          <button onClick={toSignUpModal} className={isClickMenu ? "p-2" : ""}>
            <span
              className={`font-body font-semibold px-5 pb-2 hover:text-green-400 hover:underline hover:underline-offset-8 border-green-400 transform hover:scale-110 transition-transform ease-out duration-500
              ${
                isSignUpModal
                  ? `text-green-400 underline underline-offset-8  border-green-400 `
                  : ""
              }`}
            >
              Sign up
            </span>
          </button>
          <div className="flex justify-center items-center ml-20">
            <button onClick={handleAddToCart} className="mx-7 relative">
              <ShoppingCart className={isClickMenu ? "mt-2" : ""} />
              {cartQty.length !== 0 && cartQty.length > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-medium bg-secondary-300 text-white">
                  <p className="font-body">{cartQty.length}</p>
                </span>
              )}
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
          {user && (
            <button
              onClick={handleUserMenu}
              className="flex justify-center items-center bg-green-700 w-8 h-8 rounded-2xl ml-6"
            >
              <p className="text-white font-body font-semibold">
                {user[0].toUpperCase()}
              </p>
            </button>
          )}

          {isUserMenuOpen && user && (
            <div className="flex flex-col justify-center bg-white text-black absolute right-10 top-16 rounded-md shadow-md mt-3">
            <div className="bg-green-500 flex justify-center items-center relative h-16">
            <div className="flex justify-center items-center bg-green-700 w-12 h-12 rounded-full absolute top-10">
              <p className="text-white font-body font-semibold">
                {user[0].toUpperCase()}
              </p>
            </div>

            </div>
            <div className="p-5">
            <p className="font-semibold text-center">{user}</p>
            <p className="text-sm font-body font-semibold">{email}</p>
            <button className="text-md text-blue-500 hover:underline mt-2 font-body">
              Logout
            </button>
            </div>
          </div>
          )}
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
          navigate={navigate}
        />
      )}
      {signUpModal && (
        <SignUpModal
          openModal={signUpModal}
          closeModal={handleCloseSignUpModal}
        />
      )}
      {
       loginModal && (
        <LoginModal 
          openModal={loginModal}
          closeModal={handleCloseLoginModal}
        />
       )
      }
    </nav>
  );
};

export default Header;
