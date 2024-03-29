"use client";
import { BsList, BsXLg } from "react-icons/bs";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoUniverse from "../../../public/image/Logo_universe/Rsu_logo.png";

function MobileNav({ open, setOpen }) {
  const [FacBtn, setFacBtn] = useState(false);
  return (
    <div className="flex justify-center z-2">
      <FacultyNav FacBtn={FacBtn} setFacBtn={setFacBtn} />
      <div
        className={`absolute items-center h-72 w-screen bg-white transform shadow-lg  z-2 ${
          open ? "-translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out filter  `}
      >
        <div className="flex justify-between mx-4">
          <Image
            src="/image/Logo_universe/Rangsit.png"
            alt=""
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
          />

          <button onClick={() => setOpen(!open)} className="p-3 ">
            <BsXLg size={20} />
          </button>
        </div>
        <div className="bg-gray-200 w-full h-0.5 mx-auto"></div>
        <div className="flex flex-col justify-center items-center  z-1">
          <div className=" flex justify-center w-full text-center hover:bg-gray-500 hover:text-white h-11 duration-300 ease-in-out">
            <Link
              className="flex justify-center items-center  text-lg font-bold "
              href="/pages/AnotherPage"
            >
              สมัครเรียน
            </Link>
          </div>
          <div className=" flex justify-center w-full text-center hover:bg-gray-500 hover:text-white h-11 duration-300 ease-in-out">
          <button
              className=" text-black focus:outline-none flex justify-center items-center  text-lg font-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                setFacBtn(!FacBtn);
                setOpen(!open)
              }}
            >
              <span  className="flex justify-center items-center  text-lg font-bold ">
              วิทยาลัย/คณะ
              </span>
            </button>
          </div>
          <div className=" flex justify-center w-full text-center hover:bg-gray-500 hover:text-white h-11 duration-300 ease-in-out z-1">
            <Link
              className="flex justify-center items-center  text-lg font-bold "
              href="/pages/MaptoRsu"
            >
              แผนที่ ม.รังสิต
            </Link>
          </div>
          <div className=" flex justify-center w-full text-center hover:bg-gray-500 hover:text-white h-11 duration-300 ease-in-out">
            <Link
              className="flex justify-center items-center  text-lg font-bold "
              href="#"
            >
              เกี่ยวกับ ม.รังสิต
            </Link>
          </div>
          <div className=" flex justify-center w-full text-center hover:bg-gray-500 hover:text-white h-11 duration-300 ease-in-out">
            <Link
              className="flex justify-center items-center  text-lg font-bold "
              href="#"
            >
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function FacultyNav({ FacBtn, setFacBtn }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center z-2">
      <div
        className={`absolute items-center h-72 w-screen bg-white transform shadow-lg  z-2 ${
          FacBtn ? "-translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out filter  `}
      >
        <div className="flex justify-between items-center text-xl text-pink-600 mx-4">
          <span>วิทยาลัย/คณะ</span>
          <button onClick={() => {
            setFacBtn(!FacBtn) 
            setOpen(!open)
            }}  className="p-3 ">
            <BsXLg size={20} />
          </button>
        </div>
        <div className="bg-gray-200 w-full h-0.5 mx-auto"></div>
        <div className="flex flex-col justify-center items-center  z-1">
          <div className=" flex justify-center w-full text-center hover:bg-gray-500 hover:text-white h-11 duration-300 ease-in-out">
            <Link
              className="flex justify-center items-center  text-lg font-bold "
              href="/pages/Faculty/Sciencehealth"
            >
              วิทยาศาสตร์-สุขภาพ
            </Link>
          </div>
          <div className=" flex justify-center w-full text-center hover:bg-gray-500 hover:text-white h-11 duration-300 ease-in-out">
            <Link
              className="flex justify-center items-center  text-lg font-bold "
              href="#"
            >
              วิศวกรรมศาสตร์-เทคโนโลยี
            </Link>
          </div>
          <div className=" flex justify-center w-full text-center hover:bg-gray-500 hover:text-white h-11 duration-300 ease-in-out z-1">
            <Link
              className="flex justify-center items-center  text-lg font-bold "
              href="/pages/MaptoRsu"
            >
              มนุษยศาสตร์-สังคมศาสตร์
            </Link>
          </div>
          <div className=" flex justify-center w-full text-center hover:bg-gray-500 hover:text-white h-11 duration-300 ease-in-out">
            <Link
              className="flex justify-center items-center  text-lg font-bold "
              href="#"
            >
              เศรษฐกิจ-ธุรกิจ
            </Link>
          </div>
          <div className=" flex justify-center w-full text-center hover:bg-gray-500 hover:text-white h-11 duration-300 ease-in-out">
            <Link
              className="flex justify-center items-center  text-lg font-bold "
              href="#"
            >
              ศิลปะ-การออกแบบ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <MobileNav open={open} setOpen={setOpen} className="" />
      <nav className="">
        <div className="container mx-auto  max-w-7xl">
          <div className="flex items-center justify-between  p-1 ">
            <Link className="text-black text-lg font-semibold" href="#">
              <Image
                src={LogoUniverse}
                alt=""
              />
            </Link>
            <button
              className="lg:hidden text-black focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span className="navbar-toggler-icon mr-2">
                <BsList size={30} />
              </span>
            </button>

            <div className="hidden lg:flex gap-4">
              <div className="relative group">
                <div className="dropdown ">
                  <button
                    className=" dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    สมัครเรียน
                  </button>
                  <ul className="dropdown-menu text-center font-bold">
                    <li>
                      <Link className="dropdown-item font-bold " href="/pages/RegisterPage/Bachelors">
                        ปริญญาตรี 2566
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold" href="#">
                        ปริญญาโท-เอก 2566
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold" href="#">
                        International Program
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative group">
                <div className="dropdown ">
                  <button
                    className=" dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    วิทยาลัย/คณะ
                  </button>
                  <ul className="dropdown-menu text-center font-bold">
                    <li>
                      <Link
                        className="dropdown-item font-bold "
                        href="pages\Faculty\Sciencehealth"
                      >
                        วิทยาศาสตร์ - สุขภาพ
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold" href="#">
                        วิศวกรรมศาสตร์ - เทคโนโลยี
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold" href="#">
                        มนุษยศาสตร์ - สังคมศาสตร์
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold" href="#">
                        เศรษฐกิจ - ธุรกิจ
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold" href="#">
                        ศิลปะ - การออกแบบ
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold" href="#">
                        หลักสูตรออนไลน์ / นานาชาติ / ป.โท-เอก
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative group">
                <div className="dropdown ">
                  <button
                    className=" dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    นักศึกษา
                  </button>
                  <ul className="dropdown-menu text-center font-bold">
                    <li>
                      <Link className="dropdown-item font-bold " href="#">
                        นักศึกษาปัจจุบัน
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold" href="#">
                        Intranet
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold" href="#">
                        International Students
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold" href="#">
                        ชมรมนักศึกษา
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold" href="#">
                        ปฎิทินการศึกษา
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative group">
                <div className="dropdown ">
                  <button
                    className=" dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    แผนที่ ม.รังสิต
                  </button>
                  <ul className="dropdown-menu text-center font-bold">
                    <li>
                      <Link
                        className="dropdown-item font-bold "
                        href="/pages/MaptoRsu"
                      >
                        เส้นทางมา ม.รังสิต
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item font-bold"
                        href="/pages/MapInRsu"
                      >
                        แผนที่ใน ม.รังสิต
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative group">
                <div className="dropdown ">
                  <button
                    className=" dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    เกี่ยวกับ ม.รังสิต
                  </button>
                  <ul className="dropdown-menu text-center font-bold">
                    <li>
                      <Link className="dropdown-item font-bold " href="#">
                        ต้อนรับสู่ ม.รังสิต
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold" href="#">
                        ปรัชญา
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold " href="#">
                        ชุดนักศึกษา
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold" href="#">
                        โรงเรียนสาธิต ม.รังสิต
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold " href="#">
                        โรงเรียนนานาชาติบริติช
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold" href="#">
                        กลุ่มบริษัท RSU
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Link href={""}>ติดต่อเรา</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
