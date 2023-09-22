"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from 'next/image';
import ContentImg1 from "../../../public/image/rsuvideo/content1.jpg";
import ContentImg2 from "../../../public/image/rsuvideo/content2.jpg";
import ContentImg3 from "../../../public/image/rsuvideo/content3.jpg";
import ContentImg4 from "../../../public/image/rsuvideo/content4.jpg";
import ContentImg5 from "../../../public/image/rsuvideo/content5.jpg";
import ContentImg6 from "../../../public/image/rsuvideo/content6.jpg";
import ContentImg7 from "../../../public/image/rsuvideo/content7.jpg";
import ContentImg8 from "../../../public/image/rsuvideo/content8.jpg";

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
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
          modifier: 2,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={ContentImg1} className='shadow-3xl' alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={ContentImg2} className='shadow-3xl' alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={ContentImg3} className='shadow-3xl' alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={ContentImg4} className='shadow-3xl' alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={ContentImg5} className='shadow-3xl' alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={ContentImg6} className='shadow-3xl' alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={ContentImg7} className='shadow-3xl' alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={ContentImg8} className='shadow-3xl' alt=''/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
