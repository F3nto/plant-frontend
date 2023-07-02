import React, { useEffect, useState } from "react";
import axios from "axios";

const IndoorCategories = () => {
  const [indCate, setIndCate] = useState([]);

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

  return (
    <div className="h-full">
      <div className="grid grid-cols-3 gap-4 mx-16">
      {indCate.map((item, index) => {
        return(
        <div key={index} className="flex flex-col items-center justify-center">
            <img style={{width:"50%", height:"70%"}} className="rounded object-cover" src={item.img} alt=""/>
            <p>{item.plantName}</p>
            <span>{item.price}</span>
        </div>
      )})}
    </div>
    </div>
  );
};

export default IndoorCategories;
