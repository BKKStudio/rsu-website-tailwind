"use client"
import Footer from "@/app/components/Footer";
import NavbarRegister from "@/app/components/NavbarRegister";
import Image from "next/image";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";

export default function RegisterAllLevel() {
    const [colorpush,setColorpush] = useState("")
    


    return(
   <>
    <NavbarRegister/>
    <main>
    <article className="flex justify-center items-center my-2">
          <figure className="max-w-7xl  w-full my-1 ">
            <div className="flex justify-between items-center max-md:flex-col">
              <Image
                src="/image/Logo_universe/Rsu_logo.png"
                alt=""
                width={300}
                height={200}
                className="max-md:w-2/3"
              />
              <div className="flex flex-col  max-md:hidden">
                <div className="flex gap-4 justify-center  max-md:hidden">
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
                  <Link href={"/pages/RegisterLevel/tuition"} className="no-underline text-black">
                    ค่าเทอม
                  </Link>
                </div>
                <div className=" mt-4 flex text-center  max-md:grid">
                    <Link href={"/pages/RegisterLevel"} className="no-underline text-white py-3 px-5 bg-pink-500 text-lg ">สมัครเรียน</Link>
                    <span  className="no-underline text-black text-lg p-3 flex items-center gap-2">< BsTelephoneFill size={20}/> <span>02-791-6000</span></span>
                </div>
              </div>
            </div>
          </figure>
        </article>

        <article className="hidden max-md:flex justify-center items-center bg-gray-500 ">
          <figure className="w-full  my-3 mx-2  text-white">
               {/* Responsive menu mobile */}
                <div className="  flex justify-between items-center gap-3 mx-3">
                <Link href={"/pages/RegisterLevel"} className="no-underline text-white py-2 px-10 bg-red-500 text-lg animate-animation-shakebtn">สมัครเรียน</Link>
                <Link href={""} className="no-underline text-white flex bg-green-500 p-2 gap-2">< BsTelephone size={25}/><span>02-790-6000</span></Link>
                </div>
                <div className="  flex justify-between items-center gap-3 mx-3 mt-3">
                <Link href={"https://www.facebook.com/rangsituniversity"} className="no-underline text-white  ">
                  <Image src={"/image/Iconcontact/facebook.png"} alt="" width={50} height={50}></Image>
                </Link>
                <Link href={"https://www.instagram.com/rangsitu/"} className="no-underline text-white  ">
                  <Image src={"/image/Iconcontact/Ig.png"} alt="" width={50} height={50}></Image>
                </Link>
                <Link href={"https://www.linkedin.com/company/rangsit-university-thailand"} className="no-underline text-white  ">
                  <Image src={"/image/Iconcontact/linkedin.png"} alt="" width={50} height={50}></Image>
                </Link>
                <Link href={"https://twitter.com/RangsitU"} className="no-underline text-white  ">
                  <Image src={"/image/Iconcontact/Twiter.png"} alt="" width={50} height={50}></Image>
                </Link>
                <Link href={"https://www.youtube.com/@RangsitUniversity"} className="no-underline text-white  ">
                  <Image src={"/image/Iconcontact/Youtube.png"} alt="" width={50} height={50}></Image>
                </Link>
                </div>
          </figure>
        </article>

        <article className="flex justify-center items-center  bg-sky-500">
            <figure  className="max-w-7xl  w-full my-3 mx-2 flex justify-between text-white">
            <span className="text-2xl max-md:text-xl">อื่นๆ</span>
            <span className="text-xl max-md:text-base">หน้าแรก/สมัครเรียน</span>
            </figure>
        </article>

        {/* Content */}
        <article className="flex justify-center items-center  my-4 ">
            <figure  className="max-w-7xl  w-full my-3 mx-2 flex justify-between ">
           <div className="">
            {/* List manu left */}
            <div className="grid  grid-cols-2 gap-5 max-md:grid-cols-1">
            <div>
                <div className="flex items-center">
                    <span><BsChevronRight size={15}/></span>
                    <Link href={"/pages/RegisterLevel/checkregister"} className={`no-underline ${colorpush === "register" ? "text-pink-500" : "text-gray-700"}` } target="_blank" onClick={() => setColorpush("register")}>เช็คการลงทะเบียน</Link>
                </div>
                <hr className="text-pink-600 border-dashed"></hr>
                <div className="flex items-center">
                    <span><BsChevronRight size={15}/></span>
                    <Link href={"/pages/RegisterLevel/report"} className={`no-underline ${colorpush === "report" ? "text-pink-500" : "text-gray-700"}` } target="_blank" onClick={() => setColorpush("report")}>กำหนดการรายงานตัว</Link>
                </div>
                <hr className="text-pink-600 border-dashed"></hr>
                <div className="flex items-center">
                    <span><BsChevronRight size={15}/></span>
                    <Link href={"/pages/Register"} className={`no-underline ${colorpush === "facultyandmajor" ? "text-pink-500" : "text-gray-700"}` } target="_blank" onClick={() => setColorpush("facultyandmajor")}>คณะ/สาขาที่เปิดรับ</Link>
                </div>
                <hr className="text-pink-600 border-dashed"></hr>
                <div className="flex items-center">
                    <span><BsChevronRight size={15}/></span>
                    <Link href={"http://www.dbsrsu.com/transfer.html"} className={`no-underline ${colorpush === "vocational" ? "text-pink-500" : "text-gray-700"}` } target="_blank" onClick={() => setColorpush("vocational")}>หลักสูตรเทียบโอน ปวส.</Link>
                </div>
                <hr className="text-pink-600 border-dashed"></hr>
                <div className="flex items-center">
                    <span><BsChevronRight size={15}/></span>
                    <Link href={"/pages/RegisterLevel/Scholarships"} className={`no-underline ${colorpush === "scholarship" ? "text-pink-500" : "text-gray-700"}` } target="_blank" onClick={() => setColorpush("scholarship")}>ทุนการศึกษา</Link>
                </div>
                <hr className="text-pink-600 border-dashed"></hr>
                <div className="flex items-center">
                    <span><BsChevronRight size={15}/></span>
                    <Link href={"/pages/RegisterLevel/tuition"} className={`no-underline ${colorpush === "tuition" ? "text-pink-500" : "text-gray-700"}` } target="_blank" onClick={() => setColorpush("tuition")}>ค่าเทอม</Link>
                </div>
                <hr className="text-pink-600 border-dashed"></hr>
                <div className="flex items-center">
                    <span><BsChevronRight size={15}/></span>
                    <Link href={"/pages/RegisterLevel/LoanFund"} className={`no-underline ${colorpush === "elearning" ? "text-pink-500" : "text-gray-700"}` } target="_blank" onClick={() => setColorpush("elearning")}>กองทุนเงินให้กู้ยืมเพื่อการศึกษา</Link>
                </div>
                <hr className="text-pink-600 border-dashed"></hr>
                <div className="flex items-center">
                    <span><BsChevronRight size={15}/></span>
                    <Link href={"/pages/RegisterLevel/StepRegisters"} className={`no-underline ${colorpush === "howtoregister" ? "text-pink-500" : "text-gray-700"}` } target="_blank" onClick={() => setColorpush("howtoregister")}>วิธีสมัครเรียน</Link>
                </div>
                <hr className="text-pink-600 border-dashed"></hr>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Link href={""}>
                    <Image src={"/image/Register/1.jpg"} alt="" width={300} height={300} className="hover:animate-animation-shake"></Image>
                </Link>
                <Link href={""}>
                    <Image src={"/image/Register/2.jpg"} alt="" width={300} height={300} className="hover:animate-animation-shake"></Image>
                </Link>
                <Link href={""}>
                    <Image src={"/image/Register/3.jpg"} alt="" width={300} height={300} className="hover:animate-animation-shake"></Image>
                </Link>
                <Link href={""}>
                    <Image src={"/image/Register/4.jpg"} alt="" width={300} height={300} className="hover:animate-animation-shake"></Image>
                </Link>
            </div>
            </div>
             {/* List manu left */}
           </div>
            </figure>
        </article>
        <a></a>
    </main>
    <Footer/>
   </>
    )
}   