import React, { useEffect, useState } from "react";
import axios from "axios";
import FruitePagination from "../components/Paginate/FruitPagination";

const FruitDetail = () => {
  const [fruit, setFruit] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);   //! fruit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

  const [itemPerPage, setItemPerPage] = useState(8);    

  const lastItemIndex = currentPage * itemPerPage;    //! 1 * 8 = 8

  const firstItemIndex = lastPostIndex - itemPerPage;   //! 8 * 8 = 0

  const currentPosts = fruit.slice(firstItemIndex, lastItemIndex);  //! fruit.slice(0, 8)  // output = [0, 1, 2, 3, 4, 5, 6, 7]

  useEffect(() => {
    const url = "http://localhost:3001/api/v1/fruit";

    axios
      .get(`${url}`)
      .then((res) => {
        setFruit(res.data);
      })
      .catch((err) => {
        console.log("error...", err);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-white to-green-300 h-full flex">
      <div className="mx-10 my-10 ">
        <div className="pl-8">
          <h1 className="text-lg font-semibold font-body">
            Perennial plants (နှစ်ရှည်သီးပင်စားပင်များ)
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center mt-4">
          {currentPosts.map((item, index) => {
            return (
              <>
                <div className="flex flex-col justify-center items-center">
                  <div key={index} className="px-2 py-4">
                    <img
                      src={item.subImg}
                      className="h-72 w-72 object-cover rounded shadow-black shadow-md"
                      alt=""
                    />
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
          <FruitePagination
            totalLength={fruit.length}
            itemPerPage={itemPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default FruitDetail;
