"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export default function SwiperGoodOldDay() {
  return (
    <div className="block">
      <Swiper
        effect={"flip"}
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
                src={"/image/GoodOldday/Good1.jpg"}
                alt=""
                width={1200}
                height={400}
                className="rounded-lg  w-full mb-4"
              ></Image>
              <span className="text-2xl mb-2 max-md:text-xl">
                บันทึกการเดินทางของ “สุริยา สุริยาทิพย์”
                ศิษย์เก่าคณะสถาปัตยกรรมศาสตร์
              </span>
              <span className="max-lg:text-base max-lg:mt-2  text-gray-500  max-md:hidden">
                {" "}
                สถาปนิกแบบไฮบริด คำนิยามที่อาจใกล้เคียงที่สุด
                ของสถาปนิกผู้ทำหน้าที่ผนวกการออกแบบ การก่อสร้าง
                และการดำเนินธุรกิจ มารวมไว้ในคนเดียว
                นี่คือเรื่องราวการผจญภัยในต่างแดนของ “สุริยา สุริยาทิพย์”
                ศิษย์เก่ารุ่นที่ 6 คณะสถาปัตยกรรมศาสตร์ มหาวิทยาลัยรังสิต
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
                src={"/image/GoodOldday/Good2.jpg"}
                alt=""
                width={1200}
                height={400}
                className="rounded-lg  w-full mb-4"
              ></Image>
              <span className="text-2xl mb-2 max-md:text-xl">
                เปิดมุมมองนักกฎหมายรุ่นใหม่ “อาจารย์รัศมี สุขรักษา”
                และการเรียนการสอนในหลักสูตรนิติศาสตร์(ออนไลน์) ม.รังสิต
              </span>
              <span className="max-lg:text-base max-lg:mt-2  text-gray-500  max-md:hidden">
                {" "}
                จากนักศึกษาทุนมูลนิธิราชประชานุเคราะห์ เรียนจบนิติศาสตร์
                ม.รังสิต ด้วยดีกรีเกียรตินิยม อันดับ 1
                และยังได้รางวัลบัณฑิตเหรียญทองสังคมธรรมาธิปไตย
                ผู้มีความพร้อมทั้งด้านความรู้ในวิชาชีพ
                และการเป็นผู้มีความประพฤติดีงาม
                อุทิศตนทำกิจกรรมเพื่อสังคมด้วยความเสียสละ
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
                src={"/image/GoodOldday/Good3.jpg"}
                alt=""
                width={1200}
                height={400}
                className="rounded-lg  w-full mb-4"
              ></Image>
              <span className="text-2xl mb-2 max-md:text-xl">
                บูม อลงกรณ์ ศิลปินค่าย BATTERY MUSIC เจ้าของเพลงชมพู [HER]
              </span>
              <span className="max-lg:text-base max-lg:mt-2  text-gray-500  max-md:hidden">
                {" "}
                อลงกรณ์ สุขเอี่ยม (บูม) หรือหลายคนรู้จักในนาม MOOBman
                ศิลปินน้องใหม่จากค่าย BATTERY MUSIC
                ที่แจ้งเกิดในวงการดนตรีอีกหนึ่งคน จากการปล่อย Single อย่างเพลง 4
                3 2 1 เพลง ชมพู [Her] เพลง ฉาก [Scene] และกำลังจะมีซิงเกิ้ลใหม่ๆ
                ตามมาอีกมากมาย
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
                src={"/image/GoodOldday/Good4.jpg"}
                alt=""
                width={1200}
                height={400}
                className="rounded-lg  w-full mb-4"
              ></Image>
              <span className="text-2xl mb-2 max-md:text-xl">
                “สมยศ ปาทาน” ศิษย์เก่า ว.ศิลปศาสตร์ ม.รังสิต
                ประธานวิสาหกิจชุมชนท่องเที่ยวย่านเมืองเก่าภูเก็ต
              </span>
              <span className="max-lg:text-base max-lg:mt-2  text-gray-500  max-md:hidden">
                {" "}
                “เมืองเก่าภูเก็ต” ย่านที่เต็มไปด้วยวัฒนธรรม
                และวิถีชีวิตของชาวภูเก็ต
                อีกหนึ่งแลนด์มาร์คท่องเที่ยวสำคัญของนักท่องเที่ยวเมื่อมาเยือนประเทศไทยต้องไปดื่มด่ำกับความสวยงามของอาคารสไตล์ซิโนโปรตุกีสผสมผสานความเป็นศิลปะตะวันตกกับตะวันตกเข้าด้วยกันอย่างกลมกลืน
              </span>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
  