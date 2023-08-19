"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function SwiperGoodOldDay() {
    return (
        <>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
        
              <Image  src="/image/GoodOldday/Good1.jpg" className=" w-full mb-3" alt="" width={500} height={300}/>
            

          
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center ">
              <div className="flex flex-col shadow-3xl p-4 m-6">
              <Image  src="/image/GoodOldday/Good1.jpg" className=" " alt="" width={500} height={300}/>
              <span>ddd</span>
              </div>

              </div>
            </SwiperSlide>
        
          </Swiper>
        </>
      );
}
