import React, { useEffect, useState } from "react";
import axios from "axios";

const Flower = () => {
  const [flower, setFlower] = useState([]);
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
  }, []);

  return (
    <div className="h-full mx-10 my-10">
      <div className="pl-8">
        <h1 className="text-lg font-semibold font-body">Horticultural plants (ဥယျာဉ်ခြံပန်းမန်အပင်များ)</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-4">
        {flower.map((item, index) => {
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
      <div></div>
    </div>
  );
};

export default Flower;
