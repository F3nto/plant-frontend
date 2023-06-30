import React, {useState, useRef, useEffect} from "react";
import { ShoppingCart } from "@mui/icons-material";

const Header = () => {
  const [searchtxt, setSearchtxt] = useState("");
  const [isClickMenu, setIsClickMenu] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);

  const headerRef = useRef(null);

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
  }, [setIsClickMenu, setIsScrollDown, headerRef]);

  return (
    <nav
      ref={headerRef}
      className={`font-body text-white h-24 bg-opacity-75 flex z-10  border-b-2 border-green-300 ${
        isScrollDown ? "sticky top-0 text-black bg-primary transform duration-1000 translate-y-0 border-b-2 border-green-300" : ""
      }`}
      style={{ position: "fixed", width: "100%" }}
    >
      <div className="flex flex-1 justify-between items-center">
        <div className="flex items-center ml-10 w-3/6" style={{color: "black"}}>
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
          className={`flex flex-1 items-center justify-around opacity-0 sm:opacity-100 ${
            isClickMenu
              ? "flex flex-col z-10 mt-80 right-0 transition-all duration-500 bg-green-300 p-2 rounded-bl opacity-100"
              : ""
          }`}
        >
          <React.Fragment>
            <div className={isClickMenu ? "p-2" : ""}>
              <span className="font-body font-semibold">Home</span>
            </div>
            <div className={isClickMenu ? "p-2" : ""}>
              <span className="font-body font-semibold">About</span>
            </div>
            <div className={isClickMenu ? "p-2" : ""}>
              <span className="font-body font-semibold">Log in</span>
            </div>
            <div className={isClickMenu ? "p-2" : ""}>
              <span className="font-body font-semibold">Sign up</span>
            </div>
            <ShoppingCart className={isClickMenu ? "mt-2" : ""} />
          </React.Fragment>
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
    </nav>
  );
};

export default Header;
