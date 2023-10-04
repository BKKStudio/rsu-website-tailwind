"use client"
import NavbarRegister from "@/app/components/NavbarRegister";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
import Tables from "@/app/Tablecomponents/Table";
import Footer from "@/app/components/Footer";
import { BsTelephone } from "react-icons/bs";

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
        <article className="flex justify-center items-center  bg-sky-500">
            <figure  className="max-w-7xl  w-full my-3 mx-2 flex justify-between text-white">
            <span className="text-2xl max-md:text-xl">หลักสูตรที่เปิดสอน</span>
            <span className="text-xl max-md:text-base">หน้าแรก/{levelStudy}</span>
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
            <figure className="max-w-7xl  w-full my-3 mx-2">
                <p className="mb-3 text-2xl max-md:text-xl ">หลักสูตรที่เปิดสอน ระดับ{levelStudy} | Admissions Programs</p>
                <div className="bg-pink-500 w-full h-1 mb-4"></div>
                <Tables colorBtn={colorBtn}/>
            </figure>
        </article>
      </main>
      <Footer/>
    </>
  );
}
