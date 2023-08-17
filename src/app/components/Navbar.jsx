"use client";
import { BsList, BsXLg } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function MobileNav({ open, setOpen }) {
  return (
    <div className="flex justify-center z-1">
      <div
        className={`absolute items-center h-72 w-screen bg-white transform shadow-lg  z-1 ${
          open ? "-translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out filter  `}
      >
        <div className="flex justify-between mx-4">
          <Image src="/image/Logo_universe/Rangsit.png" alt="" width={60} height={60}></Image>
          <button onClick={() => setOpen(!open)} className="p-3 ">
            <BsXLg size={20} />
          </button>
        </div>
        <div className="bg-gray-200 w-full h-0.5 mx-auto"></div>
        <div className="flex flex-col justify-center items-center  z-1">
          <div className=" flex justify-center w-full text-center hover:bg-gray-500 hover:text-white h-11 duration-300 ease-in-out">
            <Link
              className="flex justify-center items-center  text-lg font-bold "
              href="#"
            >
              สมัครเรียน
            </Link>
          </div>
          <div className=" flex justify-center w-full text-center hover:bg-gray-500 hover:text-white h-11 duration-300 ease-in-out">
            <Link
              className="flex justify-center items-center  text-lg font-bold "
              href="#"
            >
              วิทยาลัย/คณะ
            </Link>
          </div>
          <div className=" flex justify-center w-full text-center hover:bg-gray-500 hover:text-white h-11 duration-300 ease-in-out z-1">
            <Link
              className="flex justify-center items-center  text-lg font-bold "
              href="#"
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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MobileNav open={open} setOpen={setOpen} className="" />
      <nav className="">
        <div className="container mx-auto  max-w-7xl">
          <div className="flex items-center justify-between  p-1 ">
            <Link className="text-black text-lg font-semibold" href="#">
              <Image
                src={"/image/Logo_universe/Rsu_logo.png"}
                width={200}
                height={200}
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
                      <Link className="dropdown-item font-bold " href="#">
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
                      <Link className="dropdown-item font-bold " href="#">
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
                      <Link className="dropdown-item font-bold " href="#">
                      เส้นทางมา ม.รังสิต
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item font-bold" href="#">
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
    </>
  );
}
