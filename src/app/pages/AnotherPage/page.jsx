"use client";
import Footer from "@/app/components/Footer";
import NavbarRegister from "@/app/components/NavbarRegister";
import Image from "next/image";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";

export default function RegisterAllLevel() {
  const [colorpush, setColorpush] = useState("");

  return (
    <>
      <NavbarRegister />
      <main>
        <article className="flex justify-center items-center  bg-sky-500">
          <figure className="max-w-7xl  w-full my-3 mx-2 flex justify-between text-white">
            <span className="text-2xl max-md:text-xl">อื่นๆ</span>
            <span className="text-xl max-md:text-base">หน้าแรก/สมัครเรียน</span>
          </figure>
        </article>

        {/* Content */}
        <article className="flex justify-center items-center  my-4 ">
          <figure className="max-w-7xl  w-full my-3 mx-2 flex justify-between ">
            <div className="">
              {/* List manu left */}
              <div className="grid w-full  grid-cols-2 gap-5 max-md:grid-cols-1">
                <div>
                  <div className="flex items-center">
                    <span>
                      <BsChevronRight size={15} />
                    </span>
                    <Link
                      href={"/pages/AnotherPage/checkregister"}
                      className={`no-underline ${
                        colorpush === "register"
                          ? "text-pink-500"
                          : "text-gray-700"
                      }`}
                      onClick={() => setColorpush("register")}
                    >
                      เช็คการลงทะเบียน
                    </Link>
                  </div>
                  <hr className="text-pink-600 border-dashed"></hr>
                  <div className="flex items-center">
                    <span>
                      <BsChevronRight size={15} />
                    </span>
                    <Link
                      href={"/pages/AnotherPage/report"}
                      className={`no-underline ${
                        colorpush === "report"
                          ? "text-pink-500"
                          : "text-gray-700"
                      }`}
                      onClick={() => setColorpush("report")}
                    >
                      กำหนดการรายงานตัว
                    </Link>
                  </div>
                  <hr className="text-pink-600 border-dashed"></hr>
                  <div className="flex items-center">
                    <span>
                      <BsChevronRight size={15} />
                    </span>
                    <Link
                      href={"/pages/Register"}
                      className={`no-underline ${
                        colorpush === "facultyandmajor"
                          ? "text-pink-500"
                          : "text-gray-700"
                      }`}
                      onClick={() => setColorpush("facultyandmajor")}
                    >
                      คณะ/สาขาที่เปิดรับ
                    </Link>
                  </div>
                  <hr className="text-pink-600 border-dashed"></hr>
                  <div className="flex items-center">
                    <span>
                      <BsChevronRight size={15} />
                    </span>
                    <Link
                      href={"http://www.dbsrsu.com/transfer.html"}
                      className={`no-underline ${
                        colorpush === "vocational"
                          ? "text-pink-500"
                          : "text-gray-700"
                      }`}
                      onClick={() => setColorpush("vocational")}
                    >
                      หลักสูตรเทียบโอน ปวส.
                    </Link>
                  </div>
                  <hr className="text-pink-600 border-dashed"></hr>
                  <div className="flex items-center">
                    <span>
                      <BsChevronRight size={15} />
                    </span>
                    <Link
                      href={"/pages/AnotherPage/Scholarships"}
                      className={`no-underline ${
                        colorpush === "scholarship"
                          ? "text-pink-500"
                          : "text-gray-700"
                      }`}
                      onClick={() => setColorpush("scholarship")}
                    >
                      ทุนการศึกษา
                    </Link>
                  </div>
                  <hr className="text-pink-600 border-dashed"></hr>
                  <div className="flex items-center">
                    <span>
                      <BsChevronRight size={15} />
                    </span>
                    <Link
                      href={"/pages/AnotherPage/tuition"}
                      className={`no-underline ${
                        colorpush === "tuition"
                          ? "text-pink-500"
                          : "text-gray-700"
                      }`}
                      onClick={() => setColorpush("tuition")}
                    >
                      ค่าเทอม
                    </Link>
                  </div>
                  <hr className="text-pink-600 border-dashed"></hr>
                  <div className="flex items-center">
                    <span>
                      <BsChevronRight size={15} />
                    </span>
                    <Link
                      href={"/pages/AnotherPage/LoanFund"}
                      className={`no-underline ${
                        colorpush === "elearning"
                          ? "text-pink-500"
                          : "text-gray-700"
                      }`}
                      onClick={() => setColorpush("elearning")}
                    >
                      กองทุนเงินให้กู้ยืมเพื่อการศึกษา
                    </Link>
                  </div>
                  <hr className="text-pink-600 border-dashed"></hr>
                  <div className="flex items-center">
                    <span>
                      <BsChevronRight size={15} />
                    </span>
                    <Link
                      href={"/pages/AnotherPage/StepRegisters"}
                      className={`no-underline ${
                        colorpush === "howtoregister"
                          ? "text-pink-500"
                          : "text-gray-700"
                      }`}
                      onClick={() => setColorpush("howtoregister")}
                    >
                      วิธีสมัครเรียน
                    </Link>
                  </div>
                  <hr className="text-pink-600 border-dashed"></hr>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Link href={"/pages/RegisterPage/Bachelors"}>
                    <Image
                      src={"/image/Register/1.jpg"}
                      alt=""
                      width={300}
                      height={300}
                      className="hover:animate-animation-shake"
                    ></Image>
                  </Link>
                  <Link href={""}>
                    <Image
                      src={"/image/Register/2.jpg"}
                      alt=""
                      width={300}
                      height={300}
                      className="hover:animate-animation-shake"
                    ></Image>
                  </Link>
                  <Link href={""}>
                    <Image
                      src={"/image/Register/3.jpg"}
                      alt=""
                      width={300}
                      height={300}
                      className="hover:animate-animation-shake"
                    ></Image>
                  </Link>
                  <Link href={""}>
                    <Image
                      src={"/image/Register/4.jpg"}
                      alt=""
                      width={300}
                      height={300}
                      className="hover:animate-animation-shake"
                    ></Image>
                  </Link>
                </div>
              </div>
              {/* List manu left */}
            </div>
          </figure>
        </article>
        <a></a>
      </main>
      <Footer />
    </>
  );
}
