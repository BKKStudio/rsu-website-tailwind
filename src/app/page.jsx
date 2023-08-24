import "./globals.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Link from "next/link";
import ManuUnderCarousel from "./components/ManuUnderCarousel";
import Image from "next/image";
import Swipershowcase from "./components/Swiper";
import { BsFillPlayFill } from "react-icons/bs";
import Rsuvideo from "./components/Rsuvideo";
import GoodOldday from "./components/Goodoldday";
import CarouselRsuUpdate from "./components/CarouselRsuUpdate";
import CarouselLifeStyles from "./components/CarouselLifeStyles";
import {BsFillEmojiLaughingFill } from "react-icons/bs";
import SidebarModel from "./components/SidebarModel";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SidebarModel/>
      <Carousel />
      <main>
        <ManuUnderCarousel />
        {/* Open House  */}
        <article className="flex justify-center items-center my-4">
          <figure className="max-w-7xl  w-full my-3">
            <div className="text-4xl flex justify-between mb-1 items-center">
              <span className="max-sm:text-xl">OPENHOUSE</span>
              <Link
                href={""}
                className="bg-pink-500 text-sm text-white p-2 rounded-lg flex items-center max-sm:text-xs"
              >
                ลงทะเบียน OPENHOUSE 2023 <BsFillPlayFill size={19} />
              </Link>
            </div>
            <div className="bg-pink-500 w-full h-1"></div>
            <div className=" w-full mt-5 flex justify-center">
              <div className="grid grid-cols-3 w-full gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {/* Art-design */}
                <Link
                  className="hover:animate-animation-shake flex justify-center"
                  href={""}
                >
                  <Image
                    src="/image/openhouse/artdesign.jpg"
                    alt=""
                    className="rounded-lg shadow-3xl "
                    width={300}
                    height={300}
                  ></Image>
                </Link>
                {/*  Art-design ---ENd----*/}
                {/* economybusiness */}
                <Link
                  className="hover:animate-animation-shake flex justify-center"
                  href={""}
                >
                  <Image
                    src="/image/openhouse/economybusiness.jpg"
                    alt=""
                    className="rounded-lg shadow-3xl "
                    width={300}
                    height={300}
                  ></Image>
                </Link>
                {/*  economybusiness ---ENd----*/}
                {/* engineertech */}
                <Link
                  className="hover:animate-animation-shake flex justify-center"
                  href={""}
                >
                  <Image
                    src="/image/openhouse/engineertech.jpg"
                    alt=""
                    className="rounded-lg shadow-3xl "
                    width={300}
                    height={300}
                  ></Image>
                </Link>
                {/*  engineertech ---ENd----*/}
                {/* healthsciences */}
                <Link
                  className="hover:animate-animation-shake flex justify-center"
                  href={""}
                >
                  <Image
                    src="/image/openhouse/healthsciences.jpg"
                    alt=""
                    className="rounded-lg shadow-3xl "
                    width={300}
                    height={300}
                  ></Image>
                </Link>
                {/*  healthsciences ---ENd----*/}
                {/* Humanities */}
                <Link
                  className="hover:animate-animation-shake flex justify-center"
                  href={""}
                >
                  <Image
                    src="/image/openhouse/Humanities.jpg"
                    alt=""
                    className="rounded-lg shadow-3xl "
                    width={300}
                    height={300}
                  ></Image>
                </Link>
                {/* Humanities ---ENd----*/}
                {/* Online. */}
                <Link
                  className="hover:animate-animation-shake flex justify-center"
                  href={""}
                >
                  <Image
                    src="/image/openhouse/Online.jpg"
                    alt=""
                    className="rounded-lg shadow-3xl "
                    width={300}
                    height={300}
                  ></Image>
                </Link>
                {/* Online.---ENd----*/}
              </div>
            </div>
          </figure>
        </article>
        {/* Open House ---ENd---- */}

        {/* Show case */}
        <article className="flex justify-center items-center my-4">
          <figure className="max-w-7xl  w-full my-3">
            <div className="text-4xl flex justify-between mb-1 items-center">
              <Link
                href={""}
                className="bg-pink-500 text-sm text-white p-2 rounded-lg flex items-center max-sm:text-xs "
              >
                All Showcase <BsFillPlayFill size={19} />
              </Link>
              <span className="max-sm:text-xl">RSU SHOWCASE</span>
            </div>
            <div className="bg-pink-500 w-full h-1"></div>
            <div className=" w-full mt-5 px-3 flex justify-center max-lg:hidden">
              <Link
                href={""}
                className="shadow-3xl p-3 w-full grid grid-flow-col rounded-lg max-lg:hidden"
              >
                <Image
                  src={"/image/showcase/showcase1.jpg"}
                  alt=""
                  width={400}
                  height={400}
                  className="rounded-lg lg:hover:scale-125 duration-300 max-lg:w-full max-lg:mb-4"
                ></Image>
                <div className="text-center flex flex-col gap-3 justify-center">
                  <span className="text-xl">
                    วิลาวัณย์ แดนสีแก้ว ศิษย์เก่าทุนกีฬา
                    คว้าเหรียญเงินการแข่งขันนักวอลเลย์บอลนั่งทีมชาติไทย
                    อาเซียนพาราเกมส์ (ครั้งที่ 12) ประเทศกัมพูชา
                  </span>
                  <span className="text-base text-gray-500 mx-5 max-sm:hidden">
                    ยิ่งใหญ่กว่าชัยชนะที่ได้มา คือ “ขนาดของหัวใจ” นักกีฬา
                    “วิลาวัณย์ แดนสีแก้ว” ศิษย์เก่าทุนกีฬามหาวิทยาลัยรังสิต
                    คว้าเหรียญเงินจากการแข่งขันนักวอลเลย์บอลนั่งทีมชาติไทย
                    (ทีมหญิง) มหกรรมกีฬาอาเซียนพาราเกมส์ (ครั้งที่ 12) ณ
                    ประเทศกัมพูชา โดยมีประเทศสมาชิกเข้าร่วมการแข่งขันรวม 11
                    ประเทศ
                  </span>
                </div>
              </Link>
            </div>
            <div className=" w-full mt-5  px-3 flex justify-center max-lg:hidden">
              <Link
                href={""}
                className="shadow-3xl p-3 w-full grid grid-flow-col rounded-lg max-lg:hidden"
              >
                <Image
                  src={"/image/showcase/showcase3.jpg"}
                  alt=""
                  width={400}
                  height={400}
                  className="rounded-lg lg:hover:scale-125 duration-300 max-lg:w-full max-lg:mb-4"
                ></Image>
                <div className="text-center flex flex-col gap-3 justify-center">
                  <span className="text-xl">
                    “เรียนภาษา เล่นดนตรี และเล่นเกม
                    นิยามการใช้ชีวิตในรั้วมหาวิทยาลัย ” ณัฎฐพงษ์ ยงกำลัง
                    นักศึกษาวิทยาลัยศิลปศาสตร์ ม.รังสิต
                  </span>
                  <span className="text-base text-gray-500 mx-5 max-sm:hidden">
                    นายณัฎฐพงษ์ ยงกำลัง นักศึกษาชั้นปีที่ 4 สาขาวิชาภาษาอังกฤษ
                    วิทยาลัยศิลปศาสตร์ มหาวิทยาลัยรังสิต กล่าวว่า
                    ผมมีความสนใจในหลายๆ ด้านครับ ทั้งดนตรี กีฬา ภาษา
                    แต่ที่ตัดสินใจเลือกเรียนด้านภาษาเป็นหลัก
                    เพราะคิดว่าหากเรามีพื้นฐาน หรือวุฒิการศึกษาด้านนี้แล้ว
                    จะสามารถนำไปต่อยอดประกอบอาชีพได้
                  </span>
                </div>
              </Link>
            </div>
            <div className=" w-full mt-5  px-3 flex justify-center max-lg:hidden">
              <Link
                href={""}
                className="shadow-3xl p-3 w-full grid grid-flow-col rounded-lg max-lg:hidden"
              >
                <Image
                  src={"/image/showcase/showcase2.jpg"}
                  alt=""
                  width={400}
                  height={400}
                  className="rounded-lg hover:scale-125 duration-300 max-lg:w-full max-lg:mb-4"
                ></Image>
                <div className="text-center flex flex-col gap-3 justify-center">
                  <span className="text-xl">
                    ยกนิ้วให้ไปเลยกับ โอปอ-ธภัทรวัฒน์ โจสรรค์นุสนธิ์
                    ที่คว้าแชมป์โลกในศึกดับเบิ้ลยูจีพี วัน เจ็ตสกี
                    ทางไกลนอกชายฝั่งหรือออฟชอร์ชิงแชมป์โลก 2023
                  </span>
                  <span className="text-base text-gray-500 mx-5 max-sm:hidden">
                    สำหรับการเดินทางบนเส้นทางนี้ โอปอ ธภัทรวัฒน์ กล่าวว่า
                    เริ่มเล่นเจ็ตสกีมาตั้งแต่อายุ 13 ปี
                    เริ่มจากขี่เล่นทั่วไปโดยการสนับสนุนจากคุณพ่อที่อยากให้ลูกได้ทำกิจกรรม
                    เรียกว่าจากเดิมที่เคยเป็นเด็กติดเกมส์
                    ก็เปลี่ยนมารักในการเล่นกีฬา กระทั่งโค้ชอับดุล เดวิเลาะห์
                    เห็นแวว จึงได้ชักชวนมาเริ่มฝึกซ้อมและเข้าสู่สนามแข่ง
                  </span>
                </div>
              </Link>
            </div>
            <Swipershowcase />
          </figure>
        </article>
        {/* Show case ---End--- */}

        {/* RSU CONTENTS */}
        <Rsuvideo />
        {/* ----------RSU CONTENTS END--------- */}
        {/* Good old day */}
        <GoodOldday />
        {/* Good old day  end */}

        {/* RSU UPdate*/}
        <article className="flex justify-center items-center my-4">
          <figure className="max-w-7xl  w-full my-3">
            <div className="text-4xl flex justify-between mb-1 items-center">
              <span className="max-sm:text-xl">RSU UPDATE</span>
              <Link
                href={""}
                className="bg-pink-500 text-sm text-white p-2 rounded-lg flex items-center max-sm:text-xs"
              >
                All RSU Update
                <BsFillPlayFill size={19} />
              </Link>
            </div>
            <div className="bg-pink-500 w-full h-1 "></div>
            <div className="mt-5 flex justify-center max-lg:flex-wrap gap-4 mx-5">
              <div className="w-9/12 max-lg:w-full ">
                <CarouselLifeStyles />
              </div>
              <div className="w-1/4 flex flex-col  max-lg:w-full items-center justify-center gap-4">
                <div className="shadow-3xl">
                  {" "}
                  <CarouselRsuUpdate />
                </div>
                <Link href={""} className="shadow-3xl flex justify-center gap-2 items-center p-5 w-full text-xl bg-sky-400 hover:animate-animation-shake text-white ">
                  {" "}
                  <BsFillEmojiLaughingFill  size={30}  className="" /><span className="max-sm:text-sm">All Rsu-Styles</span>  <BsFillPlayFill size={19} />
                </Link>
              </div>
            </div>
          </figure>
        </article>
        {/* -------END  RSU UPdate ----------- */}

        {/* Rsu Gallary */}
        <article className="flex justify-center items-center my-4">
          <figure className="max-w-7xl  w-full my-3 ">
          <div className="text-4xl flex justify-between mb-1 items-center">
          <Link
                href={""}
                className="bg-pink-500 text-sm text-white p-2 rounded-lg flex items-center max-sm:text-xs"
              >
                All Gallery 
                <BsFillPlayFill size={19} />
              </Link>
              <span className="max-sm:text-xl">RSU GALLERY</span>
            </div>
            <div className="bg-pink-500 w-full h-1 "></div>
            <div className="mt-4 flex justify-center gap-4 mx-5">
              <div className="w-3/4 flex flex-col gap-4 justify-center">
              <img
                  src={"/image/RsuGallery/gallery2.jpg"}
                  alt=""
                  className="rounded-lg hover:scale-125 duration-300 max-lg:w-full max-lg:mb-4 shadow-3xl"
                ></img>
                <div className="grid grid-cols-2 gap-4 ">
                <img
                  src={"/image/RsuGallery/gallery4.jpg"}
                  alt=""
                  className="rounded-lg hover:scale-125 duration-300 max-lg:w-full max-lg:mb-4 shadow-3xl"
                ></img>
                    <img
                  src={"/image/RsuGallery/gallery5.jpg"}
                  alt=""
                  className="rounded-lg hover:scale-125 duration-300 max-lg:w-full max-lg:mb-4 shadow-3xl"
                ></img>
                </div>
              </div>
              <div className="">
              <img
                  src={"/image/RsuGallery/gallery1.jpg"}
                  alt=""
                  className="rounded-lg hover:scale-125 duration-300 max-lg:w-full max-lg:mb-4 shadow-3xl"
                ></img>
              </div>
            </div>
          </figure>
        </article>
         {/*----------- Rsu Gallary -----------------*/}
      </main>
      <Footer />
    </div>
  );
}
