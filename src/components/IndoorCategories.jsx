import React, { useEffect, useState } from "react";
import axios from "axios";
import { FavoriteBorderOutlined, SearchOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const IndoorCategories = () => {
  const [indCate, setIndCate] = useState([]);
  const [isHoveredView, setIsHoveredView] = useState(false);
  const [isHoveredWishList, setIsHoveredWishList] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const url = "http://localhost:3001/api/v1/indoor-plants";

    axios
      .get(`${url}`)
      .then((res) => {
        console.log("Indoor plants....", res.data);

        setIndCate(res.data);
      })
      .catch((err) => {
        console.log("error...", err);
      });
  }, []);

  const handleClickSearch = (item) => {
    const queryParams = {
      plantName: item.plantName,
      price: item.price,
      img1: item.moreDetail.img1,
      light: item.moreDetail.light,
      soil: item.moreDetail.soil,
      water: item.moreDetail.water,
      temp: item.moreDetail.temp,
      fertilizer: item.moreDetail.fertilizer,
    };

    const url = `/detail?${new URLSearchParams(queryParams).toString()}`;

    navigate(`${url}`, { state: { item } });
  };

  return (
    <div className="h-auto bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="pt-10 pl-10">
        <h2 className="font-body text-xl font-semibold">
          Indoor Plant Categories
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 mx-16">
        {indCate.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center relative"
            >
              <img
                style={{ width: "70%", height: "70%", position: "relative" }}
                className="rounded object-cover shadow-md shadow-black"
                src={item.img}
                alt=""
              />

              <div
                className="bg-black bg-opacity-30 absolute top-8 mt-[-1.5px] rounded opacity-0 hover:opacity-100 flex justify-center items-center"
                style={{ width: "70%", height: "70%" }}
              >
                <div
                  className="icon-container w-9 h-9 rounded-full bg-white flex justify-center items-center mx-3 transition-transform ease-in duration-200 hover:bg-green-300 hover:transform hover:scale-110"
                  onMouseEnter={() => setIsHoveredWishList(true)}
                  onMouseLeave={() => setIsHoveredWishList(false)}
                >
                  <button>
                    <FavoriteBorderOutlined />
                  </button>
                  <div
                    className={`hover-text  bg-green-800 p-1 rounded-md absolute -top-10 left-1/2 transform -translate-x-1/2 transition-all duration-200 ${
                      isHoveredWishList
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <span
                      style={{ fontSize: 12, letterSpacing: 1 }}
                      className="whitespace-nowrap font-body text-white font-semibold"
                    >
                      Wishlist
                    </span>
                   
                  </div>
                </div>
                <div
                  className="icon-container w-9 h-9 rounded-full bg-white flex justify-center items-center mx-3 transition-transform ease-in duration-200 hover:bg-green-300 hover:transform hover:scale-110"
                  onMouseEnter={() => setIsHoveredView(true)}
                  onMouseLeave={() => setIsHoveredView(false)}
                >
                  <button onClick={() => handleClickSearch(item)}>
                    <SearchOutlined />
                  </button>

                  <div
                    className={`hover-text  bg-green-800 p-1 rounded-md absolute -top-10 left-1/2 transform -translate-x-1/2 transition-all duration-200 ${
                      isHoveredView
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <span
                      style={{ fontSize: 12, letterSpacing: 1 }}
                      className="whitespace-nowrap font-body text-white font-semibold"
                    >
                      Quick View
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-3">
                <p className="text-md font-semibold font-body">
                  <span className="text-gray-600">Name - </span>
                  {item.plantName}
                </p>
                <span className="text-md font-semibold font-body">
                  <span className="text-gray-600">Price - </span>
                  {item.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndoorCategories;
