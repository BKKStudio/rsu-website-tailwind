"use client"
import NavbarRegister from "@/app/components/NavbarRegister";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
import Tables from "@/app/Tablecomponents/Table";
import Footer from "@/app/components/Footer";

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
        <article className="flex justify-center items-center my-4">
          <figure className="max-w-7xl  w-full my-3 mx-2">
            <div className="flex justify-between max-md:grid">
              <Image
                src="/image/Logo_universe/Rsu_logo.png"
                alt=""
                width={300}
                height={200}
              />
              <div className="flex flex-col">
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
                  <Link href={""} className="no-underline text-black">
                    ค่าเทอม
                  </Link>
                </div>
                <div className=" mt-4 flex text-center  max-md:grid">
                    <Link href={""} className="no-underline text-white py-3 px-5 bg-pink-500 text-lg ">สมัครเรียน</Link>
                    <Link href={""} className="no-underline text-black text-lg p-3 flex items-center gap-2">< BsTelephoneFill size={20}/> <span>02-791-6000</span></Link>
                </div>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center items-center my-4 bg-sky-500">
            <figure  className="max-w-7xl  w-full my-3 mx-2 flex justify-between text-white">
            <span className="text-2xl">หลักสูตรที่เปิดสอน</span>
            <span className="text-xl">หน้าแรก/{levelStudy}</span>
            </figure>
        </article>

        {/* Button Level Show */}
        <article className="flex justify-center items-center my-4">
            <figure  className="max-w-7xl  w-full my-3 mx-2">
            <img  src="/image/Slideshow/slide6.jpg" alt="" className=""></img>
            <div className="mt-4 grid grid-cols-4 gap-4">
            <button className={`p-3 ${colorBtn === "Bachelors" ? "bg-pink-500" : "bg-gray-500"} `} onClick={HandelBachelor}> 
            <span className="text-white text-xl">ปริญญาตรี</span>
            </button>
            <button className={`p-3 ${colorBtn === "Masters" ? "bg-pink-500" : "bg-gray-500"}`}  onClick={HandelMasters}> 
            <span className="text-white text-xl">ปริญญาโท</span>
            </button>
            <button className={`p-3 ${colorBtn === "Doctors" ? "bg-pink-500" : "bg-gray-500"}`} onClick={HandelDoctors}> 
            <span className="text-white text-xl">ปริญญาเอก</span>
            </button>
            <button className={`p-3 ${colorBtn === "International" ? "bg-pink-500" : "bg-gray-500"}`} onClick={HandelInternational}> 
            <span className="text-white text-xl">International</span>
            </button>
            </div>
            </figure>
        </article>

    
        {/* Table */}
        <article className="flex justify-center items-center my-4">
            <figure className="max-w-7xl  w-full my-3 mx-2">
                <p className="mb-3 text-2xl">หลักสูตรที่เปิดสอน ระดับ{levelStudy} | Admissions Programs</p>
                <div className="bg-pink-500 w-full h-1 mb-4"></div>
                <Tables colorBtn={colorBtn}/>
            </figure>
        </article>
      </main>
      <Footer/>
    </>
  );
}
