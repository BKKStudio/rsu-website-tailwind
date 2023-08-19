"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/image/rsuvideo/locationcontent1.jpg"
            className="shadow-3xl"
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/rsuvideo/locationcontent3.jpg"
            className="shadow-3xl"
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/rsuvideo/locationcontent4.jpg"
            className="shadow-3xl"
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/rsuvideo/locationcontent5.jpg"
            className="shadow-3xl"
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/rsuvideo/locationcontent6.jpg"
            className="shadow-3xl"
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/rsuvideo/locationcontent7.jpg"
            className="shadow-3xl"
            alt=''
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
