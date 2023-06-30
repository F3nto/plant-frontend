import React, { useState, useEffect, useRef } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

const PlantCarousel = () => {
  let phts = [
    { img: require("../img/plantgirl.jpg") },
    { img: require("../img/planting2.jpg") },
    { img: require("../img/plant3.jpg") },
    { img: require("../img/plant4.jpg") },
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const [collapse, setCollapse] = useState(false);

  const txtRef = useRef(null)

  const txtExpand = () => {
    setCollapse((prev) => !prev)
  }

  const navSlide = (index) => {
    setSlideIndex(index);
  };

  const leftSlider = () => {
    setSlideIndex((idx) => (idx === 0 ? phts.length - 1 : idx - 1));
  };

  const rightSlider = () => {
    setSlideIndex((idx) => (idx === phts.length - 1 ? 0 : idx + 1));
  };

  useEffect(() => {
    const carousel = setInterval(() => {
      setSlideIndex((idx) => (idx === phts.length - 1 ? 0 : idx + 1));
    }, 5000);

    if (txtRef.current.scrollHeight > txtRef.current.offsetHeight) {
      setCollapse(true);
    }

    return () => clearInterval(carousel);
  }, [phts.length]);

  return (
    <div className="flex flex-1 relative h-full">
      <div className="w-10 h-10 z-10 rounded-full bg-green-200 flex justify-center items-center absolute top-0 bottom-0 left-8 m-auto">
        <button onClick={leftSlider}>
          <ArrowLeftOutlined />
        </button>
      </div>
      <div className="w-10 h-10 z-10 rounded-full bg-green-200 flex justify-center items-center absolute top-0 bottom-0 right-8 m-auto">
        <button onClick={rightSlider}>
          <ArrowRightOutlined /> 
        </button>
      </div>
      <div className="flex flex-1 relative overflow-hidden">
        {phts.map((item, index) => {
          const isActive = index === slideIndex;
          return (
            <div
              key={index}
              className={`w-full h-full flex absolute transition-all ease-linear duration-1000 transform ${
                isActive
                  ? "transform translate-x-0"
                  : index < slideIndex //! Check if the slide is before the current slide
                  ? "transform -translate-x-full" //! Move the slide to the left
                  : "transform translate-x-full" //! Move the slide to the right
              }`}
            >
              <img
                src={item.img}
                className="w-full h-full opacity-90 object-cover"
                alt=""
              />
            </div>
          );
        })}

        <div className="carousel-dot flex absolute bottom-0 left-1/2">
          {phts.map((_, index) => {
            return (
              <span
                key={index}
                className={`dot w-2 h-2 m-1 px-2 rounded-md bg-gray-300 ${
                  index === slideIndex ? "dot-active bg-secondary-300" : ""
                }`}
                onClick={(index) => navSlide(index)}
              ></span>
            );
          })}
        </div>

        <div className="flex absolute top-0 bottom-0 left-0 right-0 sm:md:lg:right-2/3">
          <div className="px-5 py-3 justify-center items-center m-auto bg-primary rounded">
            <button className="font-body font-bold">See More</button>
          </div>
        </div>
        <div className="flex absolute bottom-0 left-20 sm:left-44 top-48 sm:md:lg:top-44 right-0 sm:md:lg:right-1/3">
          <div className="m-auto">
            <p className="font-semibold text-white">
              <span>
              ရာသီဥတုပြောင်းလဲမှုကို တိုက်ဖျက်ရန်၊ ဂေဟစနစ်များ ပြန်လည်ထူထောင်ရန်၊ လေထုအရည်အသွေးကို မြှင့်တင်ပေး {""}
              </span>
              <span ref={txtRef}
              style={{ transformOrigin: 'bottom' }}
              className={`max-h-0 inline-block overflow-hidden transition-max-height duration-500 ease-in transform ${collapse ? "expand max-h-80 " : ""}`}>
              ပြီး မျိုးဆက်သစ်များအတွက် ရေရှည်တည်တံ့သော အနာဂတ်ကို မြှင့်တင်ပေးသောကြောင့် စိုက်ပျိုးခြင်းသည် ကျွန်ုပ်တို့၏ပတ်ဝန်းကျင်ကို ထိန်းသိမ်းရန်အတွက် အရေးကြီးပါသည်။
                {" "}
              </span>
              <button onClick={txtExpand}>{collapse ? 'See less...' : 'See more...'}</button>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCarousel;
