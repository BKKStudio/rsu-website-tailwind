"use client";
import Link from 'next/link';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

export default function Swipershowcase() {
  return (
    <div  className="hidden max-lg:block">
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className=" max-w-7xl w-screen">
            <Link
              href={""}
              className="flex flex-col p-3 bg-white shadow-3xl m-5 max-lg:h-full  rounded-lg text-center text-lg"
            >
              <Image
                  src={"/image/showcase/showcase1.jpg"}
                  alt=""
                  width={400}
                  height={400}
                  className="rounded-lg hover:scale-125 duration-300 max-lg:w-full max-lg:mb-4"
                ></Image>
              <span className="max-lg:text-xl max-md:text-xl">
                วิลาวัณย์ แดนสีแก้ว ศิษย์เก่าทุนกีฬา
                คว้าเหรียญเงินการแข่งขันนักวอลเลย์บอลนั่งทีมชาติไทย
                อาเซียนพาราเกมส์ (ครั้งที่ 12) ประเทศกัมพูชา
              </span>
              <span className="max-lg:text-base max-lg:mt-2   max-md:hidden">
                {" "}
                วิลาวัณย์ แดนสีแก้ว ปัจจุบันเป็นบุคลากรสังกัด
                สถาบันศิลปวัฒนธรรมและพัฒนาสังคม มหาวิทยาลัยรังสิต กล่าวว่า
                ก่อนเข้าร่วมรายการแข่งขันได้เริ่มเข้าเก็บตัวฝึกซ้อมเป็นระยะเวลา
                5 เดือน โดยมีการแบ่งเวลาการฝึกซ้อมและการทำงานควบคู่กันไป
                ในช่วงเวลาพักซ้อมก็ทำงานของมหาวิทยาลัยในรูปแบบออนไลน์
              </span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" max-w-7xl w-screen">
            <Link
              href={""}
              className="flex flex-col p-3 bg-white shadow-3xl m-5 max-lg:h-full  rounded-lg text-center text-lg"
            >
             <Image
                  src={"/image/showcase/showcase3.jpg"}
                  alt=""
                  width={400}
                  height={400}
                  className="rounded-lg hover:scale-125 duration-300 max-lg:w-full max-lg:mb-4"
                ></Image>
              <span className="max-lg:text-xl max-md:text-xl">
              “เรียนภาษา เล่นดนตรี และเล่นเกม
                    นิยามการใช้ชีวิตในรั้วมหาวิทยาลัย ” ณัฎฐพงษ์ ยงกำลัง
                    นักศึกษาวิทยาลัยศิลปศาสตร์ ม.รังสิต
              </span>
              <span className="max-lg:text-base max-lg:mt-2   max-md:hidden">
                {" "}
                นายณัฎฐพงษ์ ยงกำลัง นักศึกษาชั้นปีที่ 4 สาขาวิชาภาษาอังกฤษ
                วิทยาลัยศิลปศาสตร์ มหาวิทยาลัยรังสิต กล่าวว่า
                ผมมีความสนใจในหลายๆ ด้านครับ ทั้งดนตรี กีฬา ภาษา
                แต่ที่ตัดสินใจเลือกเรียนด้านภาษาเป็นหลัก
                เพราะคิดว่าหากเรามีพื้นฐาน หรือวุฒิการศึกษาด้านนี้แล้ว
                จะสามารถนำไปต่อยอดประกอบอาชีพได้
              </span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" max-w-7xl w-screen">
            <Link
              href={""}
              className="flex flex-col p-3 bg-white shadow-3xl m-5 max-lg:h-full  rounded-lg text-center text-lg"
            >
              <Image
                  src={"/image/showcase/showcase2.jpg"}
                  alt=""
                  width={400}
                  height={400}
                  className="rounded-lg hover:scale-125 duration-300 max-lg:w-full max-lg:mb-4"
                ></Image>
              <span className="max-lg:text-xl max-md:text-xl">
                ยกนิ้วให้ไปเลยกับ โอปอ-ธภัทรวัฒน์ โจสรรค์นุสนธิ์
                ที่คว้าแชมป์โลกในศึกดับเบิ้ลยูจีพี วัน เจ็ตสกี
                ทางไกลนอกชายฝั่งหรือออฟชอร์ชิงแชมป์โลก 2023
              </span>
              <span className="max-lg:text-base max-lg:mt-2   max-md:hidden">
                {" "}
                สำหรับการเดินทางบนเส้นทางนี้ โอปอ ธภัทรวัฒน์ กล่าวว่า
                เริ่มเล่นเจ็ตสกีมาตั้งแต่อายุ 13 ปี
                เริ่มจากขี่เล่นทั่วไปโดยการสนับสนุนจากคุณพ่อที่อยากให้ลูกได้ทำกิจกรรม
                เรียกว่าจากเดิมที่เคยเป็นเด็กติดเกมส์
                ก็เปลี่ยนมารักในการเล่นกีฬา กระทั่งโค้ชอับดุล เดวิเลาะห์ เห็นแวว
                จึงได้ชักชวนมาเริ่มฝึกซ้อมและเข้าสู่สนามแข่ง
              </span>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
