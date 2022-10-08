import { clientInfo } from "content/client";
import next from "next";
import Image from "next/image";
import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import SliderItem from "./SliderItem";

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
);

const ClientQuote = () => {
  var settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const sliderRef = useRef<any>(null);
  function next() {
    sliderRef?.current!.slickNext();
  }
  function previous() {
    sliderRef?.current!.slickPrev();
  }

  return (
    <div className="flex rounded-lg bg-gray-100 flex-col-reverse sm:flex-row pb-5 md:pb-0" id="testimonial">
      <div className="w-100 sm:w-[30%] mt-3 sm:mt-0 justify-center align-middle flex flex-col space-y-2">
        <h4 className="text-gray-700 font-semibold text-center text-3xl">
          Client Speak
        </h4>
        <div className="space-x-3 flex justify-center align-middle">
          <button
            className="rounded-full p-2 text-white bg-gray-500 hover:bg-primary-500 active:bg-primary-500"
            onClick={previous}
          >
            <ChevronLeft />
          </button>
          <button
            className="rounded-full text-white bg-gray-500 hover:bg-primary-500 active:bg-primary-500 p-2"
            onClick={next}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="w-100 sm:w-[70%]">
        <Slider className="" ref={sliderRef} {...settings}>
          {clientInfo.map((info, index) => (
            <SliderItem key={index} {...info} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientQuote;
