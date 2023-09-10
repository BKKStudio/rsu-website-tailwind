"use client"
import NavbarRegister from "@/app/components/NavbarRegister";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import Footer from "@/app/components/Footer";
import { BsTelephone } from "react-icons/bs";
import TableTuitions from "@/app/Tablecomponents/TablesTuition/Tabletuition";

export default function AlllevelRegister() {
    const [levelStudy,setLevelStudy] = useState("ปริญญาตรี")
    const [colorBtn,setColorBtn] = useState("Bachelors")

    const HandelBachelor = (() =>{
        setLevelStudy("ปริญญาตรี")
        setColorBtn("Bachelors")
    })

    const HandelMasters = (() =>{
        setLevelStudy("ปริญญาโท")
        setColorBtn("Masters")
        
    })
    const HandelDoctors = (() =>{
        setLevelStudy("ปริญญาเอก")
        setColorBtn("Doctors")
    })
    const HandelInternational = (() =>{
        setLevelStudy("International")
        setColorBtn("International")
        
    })
  return (
    <>
      <NavbarRegister />
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
            <span className="text-2xl max-md:text-xl">ค่าเทอม</span>
            <span className="text-xl max-md:text-base">{levelStudy} 2566</span>
            </figure>
        </article>

        {/* Button Level Show */}
        <article className="flex justify-center items-center my-4">
            <figure  className="max-w-7xl  w-full my-3 mx-2">
            <img  src="/image/Slideshow/slide6.jpg" alt="" className=""></img>
            <div className="mt-4 grid grid-cols-4 gap-4  max-md:grid-cols-2">
            <button className={`p-3 ${colorBtn === "Bachelors" ? "bg-pink-500" : "bg-gray-500"} `} onClick={HandelBachelor}> 
            <span className="text-white text-xl max-md:text-base">ปริญญาตรี</span>
            </button>
            <button className={`p-3 ${colorBtn === "Masters" ? "bg-pink-500" : "bg-gray-500"}`}  onClick={HandelMasters}> 
            <span className="text-white text-xl max-md:text-base">ปริญญาโท</span>
            </button>
            <button className={`p-3 ${colorBtn === "Doctors" ? "bg-pink-500" : "bg-gray-500"}`} onClick={HandelDoctors}> 
            <span className="text-white text-xl max-md:text-base">ปริญญาเอก</span>
            </button>
            <button className={`p-3 ${colorBtn === "International" ? "bg-pink-500" : "bg-gray-500"}`} onClick={HandelInternational}> 
            <span className="text-white text-xl max-md:text-base">International</span>
            </button>
            </div>
            </figure>
        </article>

    
        {/* Table */}
        <article className="flex justify-center items-center my-4">
            <figure className="max-w-7xl   w-full my-3 mx-2">
                <p className="mb-3 text-2xl max-md:text-xl text-pink-600 flex items-center"><BsChevronRight size={25}/> ประมาณการค่าเล่าเรียนตลอดหลักสูตร ประจำปีการศึกษา 2566 {levelStudy}</p>
                <div className="bg-pink-500 w-full h-1 mb-4"></div>
                <TableTuitions colorBtn={colorBtn}/>
            </figure>
        </article>
      </main>
      <Footer/>
    </>
  );
}
