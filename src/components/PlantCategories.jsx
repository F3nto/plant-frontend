import React, { useState, useEffect } from "react";
import axios from "axios";

const PlantCategories = () => {
  const [category, setCategory] = useState([]);
  const [imgSlideIndex, setImgSlideIndex] = useState(0);

  useEffect(() => {
    const url = `http://localhost:3001/api/v1/categories`;

    axios
      .get(`${url}`)
      .then((res) => {
        console.log("API response", res.data);
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (category.length > 0) {
      const imgCount = Object.values(category[0].img).length;
      const interval = setInterval(() => {
        setImgSlideIndex((idx) => (idx === imgCount - 1 ? 0 : idx + 1));
      }, 5000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [category]);

  return (
    <div className="h-full mx-auto bg-gradient-to-r from-green-200 to-green-500 ">
      <div className="ml-4 pt-4 sm:ml-10 sm:pt-10">
        <h2 className="text-xl font-body font-semibold">Plant Categories</h2>
      </div>
      <div className="flex flex-1 relative mt-4 sm:mt-10">
        {category.map((item) => {
          return (
            <>
              <div className="mx-4 sm:mx-28" key={item._id}>
                {Object.values(item.img).map((img, imgindex) => {
                  const isActive = imgindex === imgSlideIndex;
                  const imgStyles = {
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 1.5s ease-in-out",
                  };
                  return (
                    <div key={imgindex} style={imgStyles} className="absolute">
                      <img
                        className="w-80 h-96 rounded-md object-cover"
                        src={img}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex-col z-50">
                <div className="text-white font-semibold">
                  <p>{item.plantCateName}</p>
                </div>
                <div style={{marginTop:340}} >
                  <button className="px-5 py-3 bg-primary shadow-green-800 shadow-md rounded-md font-semibold">Show Detail</button>
                </div>
              </div>
              
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PlantCategories;
