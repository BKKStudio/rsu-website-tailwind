"use client";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "@/app/components/Footer";
import { BsTelephone } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SciencHealth() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <main>
        <article className="flex justify-center items-center my-2">
          <figure className="max-w-7xl  w-full my-1 ">
            <div className="flex justify-between items-center max-md:flex-col">
              <Image
                src="/image/Logo_universe/Rsu_logo.png"
                alt=""
                width={250}
                height={200}
                className="max-md:w-2/3"
              />
              <div className="flex flex-col  max-md:hidden">
                <div className="flex gap-4 justify-center mx-3  max-md:hidden">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      สมัครเรียน
                    </button>
                    <ul className="dropdown-menu">
                      <li className="">
                        <Link href="#" className="dropdown-item">
                          ปริญญาตรี2566
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="dropdown-item">
                          ปริญญาโท-เอก 2566
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="dropdown-item">
                          International Program
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      วิทยาลัย/คณะ
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="#">
                          วิทยาศาสตร์ - สุขภาพ
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          วิศวกรรมศาสตร์ - เทคโนโลยี
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          มนุษยศาสตร์ - สังคมศาสตร์
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          เศรษฐกิจ - ธุรกิจ
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          ศิลปะ - การออกแบบ
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          หลักสูตรออนไลน์ / นานาชาติ / ป.โท-เอก
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href={"/pages/RegisterLevel/tuition"}
                    className="no-underline text-black"
                  >
                    ค่าเทอม
                  </Link>
                </div>
                <div className=" mt-4 flex text-center  max-md:grid">
                  <Link
                    href={"/pages/RegisterLevel"}
                    className="no-underline text-white py-2 px-4 bg-pink-500 text-lg "
                  >
                    สมัครเรียน
                  </Link>
                  <span className="no-underline text-black text-lg p-2 px-4 flex items-center gap-2">
                    <BsTelephoneFill size={20} /> <span>02-791-6000</span>
                  </span>
                </div>
              </div>
            </div>
          </figure>
        </article>

        <article className="hidden max-md:flex justify-center items-center bg-gray-500 ">
          <figure className="w-full  my-3 mx-2  text-white">
            {/* Responsive menu mobile */}
            <div className="  flex justify-between items-center gap-3 mx-3">
              <Link
                href={"/pages/RegisterLevel"}
                className="no-underline text-white py-2 px-10 bg-red-500 text-lg animate-animation-shakebtn"
              >
                สมัครเรียน
              </Link>
              <Link
                href={""}
                className="no-underline text-white flex bg-green-500 p-2 gap-2"
              >
                <BsTelephone size={25} />
                <span>02-790-6000</span>
              </Link>
            </div>
            <div className="  flex justify-between items-center gap-3 mx-3 mt-3">
              <Link
                href={"https://www.facebook.com/rangsituniversity"}
                className="no-underline text-white  "
              >
                <Image
                  src={"/image/Iconcontact/facebook.png"}
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </Link>
              <Link
                href={"https://www.instagram.com/rangsitu/"}
                className="no-underline text-white  "
              >
                <Image
                  src={"/image/Iconcontact/Ig.png"}
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/company/rangsit-university-thailand"
                }
                className="no-underline text-white  "
              >
                <Image
                  src={"/image/Iconcontact/linkedin.png"}
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </Link>
              <Link
                href={"https://twitter.com/RangsitU"}
                className="no-underline text-white  "
              >
                <Image
                  src={"/image/Iconcontact/Twiter.png"}
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </Link>
              <Link
                href={"https://www.youtube.com/@RangsitUniversity"}
                className="no-underline text-white  "
              >
                <Image
                  src={"/image/Iconcontact/Youtube.png"}
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </Link>
            </div>
          </figure>
        </article>

        {/* Content */}
        <article className="flex justify-center items-center">
          <figure className="w-full  ">
            <div className="bg-sky-300 w-full flex justify-center  relative">
              <div className="max-w-7xl w-full ">
                <div className="flex justify-between mt-5 ">
                  <div className=" flex justify-center">
                    <div className="flex flex-col mt-5 max-lg:ml-5 max-md:mt-0">
                      <span className="text-pink-600 text-4xl max-md:text-2xl">
                        วิทยาลัยแพทยศาสตร์
                      </span>
                      <span className="text-5xl max-md:text-3xl max-sm:text-base">
                        COLLEGE OF MEDICINE
                      </span>
                      <span className="text-white text-xl max-md:text-base">
                        อยากเป็นหมอ ชอบช่วยเหลือผู้อื่น เปิดเทอมนี้
                        <span className="text-2xl text-pink-600  max-md:text-base">
                          มาอยู่ทีมเดียวกับเรานะ
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="top">
                    <img
                      src={"/image/Faculty/Scienc/Medicine/1.png"}
                      alt=""
                      className="animation"
                      data-aos="fade-left"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="absolute  flex items-end h-full">
                <img
                  src={"/image/Faculty/WaveTemplate/wave.png"}
                  alt=""
                  className=""
                ></img>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div>
                <div className="flex justify-center">
                  <Link
                    href={
                      "https://www.facebook.com/profile.php?id=100057508117641&ref=embed_page"
                    }
                  >
                    <Image
                      src={"/image/Faculty/Scienc/Medicine/Logo.png"}
                      alt=""
                      width={200}
                      height={400}
                      className=""
                    ></Image>
                  </Link>
                </div>
                <p className="mt-4 text-base text-center">
                  <span className="text-xl text-pink-500">วิสัยทัศน์:</span>
                  สถาบันผลิตแพทย์รัฐร่วมเอกชนชั้นนำระดับสากล
                </p>
                <p className="mt-4 text-base text-center">
                  <span className="text-xl text-pink-500">ปรัชญา:</span>
                  ผลิตแพทย์ที่ได้มาตรฐาน มีคุณธรรม จริยธรรม
                  เพื่อสร้างสรรค์สิ่งที่ดีให้กับสังคม
                </p>
                <p className="mt-4 text-base text-center">
                  <span className="text-xl text-pink-500">ปณิธาน:</span>
                  ผลิตแพทย์ที่มีความสามารถในการส่งเสริม ป้องกัน รักษา
                  และฟื้นฟูสุขภาพให้ประชาชนมีคุณภาพชีวิตที่ดี
                </p>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center items-center bg-sky-100">
          <figure className="max-w-7xl w-full">
            <div>
              <div className="grid grid-cols-2 mt-3 max-md:grid-cols-1">
                <div className="flex flex-col justify-center items-center">
                  <span className="text-3xl text-pink-500 mb-2">
                    คุณสมบัติของผู้เข้าศึกษา
                  </span>
                  <span className="text-base text-center">
                    เป็นผู้สำเร็จการศึกษามัธยมศึกษาตอนปลาย หรือ
                    กำลังศึกษาในชั้นมัธยมศึกษาตอนปลายชั้นปีสุดท้ายตามหลักสูตรของกระทรวงศึกษาธิการ
                    กรณีเทียบเท่าให้มหาวิทยาลัยพิจารณา
                  </span>
                </div>
                <div className="p-2">
                  <img
                    src={"/image/Faculty/Scienc/Medicine/2.jpg"}
                    alt=""
                    className="rounded-lg "
                    data-aos="fade-left"
                  ></img>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-3  max-md:grid-cols-1">
                <div className="p-2">
                  <img
                    src={"/image/Faculty/Scienc/Medicine/3.jpg"}
                    alt=""
                    className="rounded-lg"
                    data-aos="fade-right"
                  ></img>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-2xl text-pink-500">
                    การคัดเลือกผู้เข้าศึกษา
                  </span>
                  <span className="text-xl text-center">
                    มีช่องทางการรับนักศึกษาเข้าศึกษา 2 ช่องทาง 3 รอบการรับสมัคร
                    คือ ผ่านการรับของรอบมหาวิทยาลัยรังสิตรับตรง 2 รอบ ดังนี้
                  </span>
                  <span className="text-red-500 text-base text-center">
                  - รอบมหาวิทยาลัยรังสิตรับตรงรอบที่ 1
                  </span>
                  <span className="text-red-500 text-base text-center">
                  - รอบมหาวิทยาลัยรังสิตรับตรงรอบที่ 2
                  </span>
                  <span className="text-red-500 text-base text-center">
                  - ผ่านการรับของ กลุ่มสถาบันแพทยศาสตร์แห่งประเทศไทย (กสพท.)
                  </span>
                </div>
              </div>
            </div>
          </figure>
        </article>
      </main>
      <Footer />
    </>
  );
}
