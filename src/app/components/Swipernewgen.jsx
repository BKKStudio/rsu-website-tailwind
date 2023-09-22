"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import Location1 from "../../../public/image/rsuvideo/locationcontent1.jpg";
import Location2 from "../../../public/image/rsuvideo/locationcontent3.jpg";
import Location3 from "../../../public/image/rsuvideo/locationcontent4.jpg";
import Location4 from "../../../public/image/rsuvideo/locationcontent5.jpg";
import Location5 from "../../../public/image/rsuvideo/locationcontent6.jpg";
import Location6 from "../../../public/image/rsuvideo/locationcontent7.jpg";
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
          <Image
            src={Location1}
            className="shadow-3xl"
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Location2}
            className="shadow-3xl"
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Location3}
            className="shadow-3xl"
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Location4}
            className="shadow-3xl"
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image
            src={Location5}
            className="shadow-3xl"
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image
            src={Location6}
            className="shadow-3xl"
            alt=''
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
