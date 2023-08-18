"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



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
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/image/rsuvideo/content1.jpg" className='shadow-3xl' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/rsuvideo/content2.jpg"  className='shadow-3xl'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/rsuvideo/content3.jpg" className='shadow-3xl' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/rsuvideo/content4.jpg" className='shadow-3xl' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/rsuvideo/content5.jpg"  className='shadow-3xl'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/rsuvideo/content6.jpg" className='shadow-3xl' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/rsuvideo/content7.jpg" className='shadow-3xl' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/rsuvideo/content8.jpg"  className='shadow-3xl'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
