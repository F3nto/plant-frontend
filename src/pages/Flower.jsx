import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import { SearchOutlined, FavoriteBorderOutlined } from "@mui/icons-material";
import FlowerPagination from "../components/Paginate/FlowerPagination";
import {
  addToWishList,
  removeFromWishList,
} from "../redux/store/actions/wishList";

const Flower = () => {
  const [flower, setFlower] = useState([]);

  const [isHoveredView, setIsHoveredView] = useState(false);
  const [isHoveredWishList, setIsHoveredWishList] = useState(false);



  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1); 

  const itemPerPage = 8;

  const lastItemIndex = currentPage * itemPerPage; 

  const firstItemIndex = lastItemIndex - itemPerPage;

  const currentPosts = flower.slice(firstItemIndex, lastItemIndex); 

  const wishList = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  const handleFav = (item) => {
    if (wishList.find((wishItem) => wishItem._id === item._id)) {
      dispatch(removeFromWishList(item._id));
    } else {
      dispatch(addToWishList(item));
    }
  };

  const handleClickSearch = (item) => {
    console.log("fruit items...", item);

    const queryParams = {
      _id: item._id,
      name: item.name,
      price: item.price,
      subImg: item.subImg,
      light: item.moreDetail.light,
      soil: item.moreDetail.soil,
      water: item.moreDetail.water,
      temp: item.moreDetail.temp,
      fertilizer: item.moreDetail.fertilizer,
      description: item.moreDetail.description,
    };

    const url = `/flower-detail?${new URLSearchParams(queryParams).toString()}`;

    navigate(url, { state: { item } });
  };

  useEffect(() => {
    const url = "http://localhost:3001/api/v1/flower";

    axios
      .get(`${url}`)
      .then((res) => {
        setFlower(res.data);
      })
      .catch((err) => {
        console.log("error...", err);
      });
  }, [dispatch]);

  return (
    <div className="h-full mx-10 my-10">
      <div className="pl-8">
        <h1 className="text-lg font-semibold font-body">
          Horticultural plants (ဥယျာဉ်ခြံပန်းမန်အပင်များ)
        </h1>
      </div>
      <div className="flex flex-wrap justify-start mt-4 ml-5">
        {currentPosts.map((item, index) => {
          return (
            <>
              <div className="flex flex-col justify-center items-center">
                <div key={index} className="px-2 py-4 relative">
                  <img
                    src={item.subImg}
                    className="h-72 w-72 object-cover rounded shadow-black shadow-md"
                    alt=""
                  />
                  <div className="bg-black w-72 h-72 bg-opacity-30 ml-2 mt-4 absolute inset-0 rounded opacity-0 hover:opacity-100 flex justify-center items-center">
                    <div
                      className="icon-container w-9 h-9 rounded-full bg-white flex justify-center items-center mx-3 transition-transform ease-in duration-200 hover:bg-green-300 hover:transform hover:scale-110"
                      onMouseEnter={() => setIsHoveredWishList(true)}
                      onMouseLeave={() => setIsHoveredWishList(false)}
                    >
                      <button onClick={() => handleFav(item, index)}>
                        {wishList.find(
                          (wishItem) => wishItem._id === item._id
                        ) ? (
                          <img
                            src={require("../img/icons/lover.png")}
                            style={{ width: 25, height: 25 }}
                            alt=""
                          />
                        ) : (
                          <FavoriteBorderOutlined />
                        )}
                      </button>
                      <div
                        className={`hover-text  bg-green-800 px-1 rounded absolute -top-9 left-1/2 transform -translate-x-1/2 transition-all duration-200 ${
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
                        className={`hover-text  bg-green-800 px-1 rounded absolute -top-9 left-1/2 transform -translate-x-1/2 transition-all duration-200 ${
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
                </div>
                <div>
                  <p className="text-md font-semibold font-body">
                    <span className="text-gray-600">Name - </span>
                    {item.name}
                  </p>
                  <p className="text-md font-semibold font-body">
                    <span className="text-gray-600">Price - </span>
                    {item.price} MMK
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex justify-center mt-8">
          <FlowerPagination
            totalLength={flower.length}
            itemPerPage={itemPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
    </div>
  );
};

export default Flower;
