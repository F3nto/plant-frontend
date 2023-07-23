import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlantCategories = () => {
  const [category, setCategory] = useState([]);
  const [imgSlideIndex, setImgSlideIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:3001/api/v1/categories`;

    axios
      .get(`${url}`)
      .then((res) => {
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

  const handleShowDetail = (item) => {

    console.log("handleShow detail item...",item)

    let url = ""
    switch (item.plantCateName) {
      case "ဥယျာဉ်ခြံပန်းမန်အပင်များ":
        url = "/flower";
        break;
      case "နှစ်ရှည်သီးပင်စားပင်များ":
        url = "/fruit";
        break;
      default : 
      alert("No data...")
    }
    navigate(url)
  }

  return (
    <div className="h-full bg-gradient-to-r from-white to-green-300 ">
      <div className="ml-4 pt-4 sm:ml-10 sm:pt-10">
        <h2 className="text-xl font-body font-semibold">Plant Categories</h2>
      </div>
      <div className="flex flex-1 relative mt-14 sm:mt-20">
        {category.map((item) => {
          return (
            <>
              <div className="mx-4 sm:mx-20" key={item._id}>
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
              <div style = {{marginLeft: "-10px"}} className="flex-1 z-50">
                <div className="font-semibold -mt-12 sm:-mt-8 ">
                  <span>{item.plantCateName}</span>
                </div>
                <div style={{ marginTop: 340 , marginLeft:"25px"}}>
                  <button onClick = {() => handleShowDetail(item)} className="px-5 py-3 bg-primary shadow-green-800 shadow-md rounded-md font-semibold">
                    Show Detail
                  </button>
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
