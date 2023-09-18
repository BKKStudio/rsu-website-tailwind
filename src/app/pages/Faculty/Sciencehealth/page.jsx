"use client";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "@/app/components/Footer";
import { BsTelephone } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import SidebarModel from "@/app/components/SidebarModel";
import { FaMoneyCheckAlt, FaMoneyBillWave } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { RiShakeHandsFill } from "react-icons/ri";
import { BsPenFill } from "react-icons/bs";

export default function SciencHealth() {
  const [data, setData] = useState({
    Faculty: "",
    Major: "",
    term1: "",
    term2: "",
    term3: "",
    term4: "",
    term5: "",
    term6: "",
    dsl: "",
    Allterm: "",
  });
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/*Model  tuition */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-pink-600 text-white">
              <p className="modal-title fs-5" id="exampleModalToggleLabel">
                {data.Faculty}
              </p>
              <button
                type="button"
                className=""
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <BsXLg size={25} />
              </button>
            </div>
            <div className="modal-body w-full p-0 ">
              <div>
                <div className="text-center p-2 bg-gray-600 text-white">
                  {data.Major}
                </div>
                <table className="w-full text-center">
                  <thead className=" text-black">
                    <tr className="border  bg-gray-200">
                      <th
                        className="border p-1  max-sm:text-xs font-poppins"
                        colSpan="5"
                      >
                        ปีการศึกษาที่ 1
                      </th>
                      <th className="border p-1  max-sm:text-xs" colSpan="1">
                        {data.term1}
                      </th>
                    </tr>
                    <tr className="border ">
                      <th
                        className="border p-1  max-sm:text-xs font-poppins"
                        colSpan="5"
                      >
                        ปีการศึกษาที่ 2
                      </th>
                      <th className="border p-1  max-sm:text-xs " colSpan="1">
                        {data.term2}
                      </th>
                    </tr>
                    <tr className="border bg-gray-200">
                      <th
                        className="border p-1  max-sm:text-xs font-poppins"
                        colSpan="5"
                      >
                        ปีการศึกษาที่ 3
                      </th>
                      <th className="border p-1  max-sm:text-xs " colSpan="1">
                        {data.term3}
                      </th>
                    </tr>
                    <tr className="border ">
                      <th
                        className="border p-1  max-sm:text-xs font-poppins"
                        colSpan="5"
                      >
                        ปีการศึกษาที่ 4
                      </th>
                      <th className="border p-1  max-sm:text-xs " colSpan="1">
                        {data.term4}
                      </th>
                    </tr>
                    <tr className="border bg-gray-200">
                      <th
                        className="border p-1  max-sm:text-xs font-poppins"
                        colSpan="5"
                      >
                        ปีการศึกษาที่ 5
                      </th>
                      <th className="border p-1  max-sm:text-xs " colSpan="1">
                        {data.term5}
                      </th>
                    </tr>
                    <tr className="border ">
                      <th
                        className="border p-1  max-sm:text-xs font-poppins"
                        colSpan="5"
                      >
                        ปีการศึกษาที่ 6
                      </th>
                      <th className="border p-1  max-sm:text-xs " colSpan="1">
                        {data.term6}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="border  bg-gray-200 ">
                      <th
                        colSpan="5"
                        className="border p-1 max-lg:p-1 max-lg:text-sm max-sm:text-xs text-end font-poppins"
                      >
                        ลักษณะการกู้ยืมฯ
                      </th>
                      <td className="border p-1   max-sm:text-xs">
                        {data.dsl}
                      </td>
                    </tr>
                    <tr className="border ">
                      <th
                        colSpan="5"
                        className="border p-1 max-lg:p-1 max-lg:text-sm max-sm:text-xs text-end font-poppins"
                      >
                        ค่าเทอมตลอดหลักสูตร
                      </th>
                      <td className="border p-1   max-sm:text-xs">
                        {data.Allterm}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-center items-center">
                  <div className="flex gap-2 p-3">
                    <Link
                      href=""
                      className=" p-2 no-underline text-white bg-gray-400 rounded-lg flex items-center gap-2"
                    >
                      กองทุนกู้ยืมฯ <RiShakeHandsFill size={20} />
                    </Link>
                    <Link
                      href=""
                      className="p-2 no-underline text-white bg-pink-600 rounded-lg flex items-center gap-2"
                    >
                      สมัครเรียน <BsPenFill size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Model  tuition*/}

      <SidebarModel />
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
            <div className="flex justify-between items-center gap-3 mx-3 mt-3">
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

        {/* Content Sciencehealth*/}
        <article className="flex justify-center items-center">
          <figure className="w-full  ">
            <div className=" w-full flex justify-center  relative bg-sky-300">
              <div className="max-w-7xl w-full ">
                <div className="flex justify-between mt-5 ">
                  <div className=" flex justify-center">
                    <div className="flex flex-col md:mt-5 max-lg:ml-5 max-md:mt-0">
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
                  <div className="top overflow-hidden">
                    <img
                      src={"/image/Faculty/Scienc/Medicine/1.png"}
                      alt=""
                      className="animation"
                      data-aos="fade-left"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="absolute h-full flex items-end border-b border-white">
                <Image
                  src={"/image/Faculty/WaveTemplate/wave.png"}
                  alt=""
                  className=""
                  width={2000}
                  height={550}

                ></Image>
              </div>
            </div>
            <div className="w-full flex justify-center pb-4">
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
                <p className="mt-4 text-base text-center max-md:px-5">
                  <span className="text-xl text-sky-500">วิสัยทัศน์:</span>
                  สถาบันผลิตแพทย์รัฐร่วมเอกชนชั้นนำระดับสากล
                </p>
                <p className="mt-4 text-base text-center max-md:px-5">
                  <span className="text-xl text-sky-500">ปรัชญา:</span>
                  ผลิตแพทย์ที่ได้มาตรฐาน มีคุณธรรม จริยธรรม
                  เพื่อสร้างสรรค์สิ่งที่ดีให้กับสังคม
                </p>
                <p className="mt-4 text-base text-center max-md:px-5">
                  <span className="text-xl text-sky-500">ปณิธาน:</span>
                  ผลิตแพทย์ที่มีความสามารถในการส่งเสริม ป้องกัน รักษา
                  และฟื้นฟูสุขภาพให้ประชาชนมีคุณภาพชีวิตที่ดี
                </p>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center items-center">
          <figure className="max-w-7xl w-full">
            <div className="mb-4">
              <div className="grid grid-cols-2 mt-3 max-md:grid-cols-1 items-center">
                <div className="flex flex-col text-center justify-center items-center px-5 pb-4">
                  <span className="text-3xl text-sky-500 mb-2">
                    คุณสมบัติของผู้เข้าศึกษา
                  </span>
                  <span className="text-base text-center max-md:px-5 max-md:">
                    เป็นผู้สำเร็จการศึกษามัธยมศึกษาตอนปลาย หรือ
                    กำลังศึกษาในชั้นมัธยมศึกษาตอนปลายชั้นปีสุดท้ายตามหลักสูตรของกระทรวงศึกษาธิการ
                    กรณีเทียบเท่าให้มหาวิทยาลัยพิจารณา
                  </span>
                </div>
                <div className="p-2 overflow-hidden">
                  <Image
                    src={"/image/Faculty/Scienc/Medicine/2.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-left"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-3  max-md:grid-cols-1 items-center ">
                <div className="p-2 overflow-hidden">
                  <Image
                    src={"/image/Faculty/Scienc/Medicine/3.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-right"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
                <div className="flex flex-col justify-center items-center max-md:py-5 px-5">
                  <span className="text-2xl text-sky-500">
                    การคัดเลือกผู้เข้าศึกษา
                  </span>
                  <span className="text-base text-center max-md:px-5 ">
                    มีช่องทางการรับนักศึกษาเข้าศึกษา 2 ช่องทาง 3 รอบการรับสมัคร
                    คือ ผ่านการรับของรอบมหาวิทยาลัยรังสิตรับตรง 2 รอบ ดังนี้
                  </span>
                  <span className="text-gray-500 text-base text-center">
                    - รอบมหาวิทยาลัยรังสิตรับตรงรอบที่ 1
                  </span>
                  <span className="text-gray-500 text-base text-center">
                    - รอบมหาวิทยาลัยรังสิตรับตรงรอบที่ 2
                  </span>
                  <span className="text-gray-500 text-base text-center">
                    - ผ่านการรับของ กลุ่มสถาบันแพทยศาสตร์แห่งประเทศไทย (กสพท.)
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-3  max-lg:grid-cols-1 items-center">
                <div className="hidden p-2 max-lg:block mb-3 overflow-hidden">
                  <img
                    src={"/image/Faculty/Scienc/Medicine/4.jpg"}
                    alt=""
                    className="rounded-lg lg:shadow-lg"
                    data-aos="fade-left"
                  ></img>
                </div>
                <div className="flex flex-col justify-center text-center items-center  max-md:pb-5 px-5">
                  <span className="text-2xl text-sky-500 pb-2">
                    โดยมีขั้นตอนการคัดเลือกดังต่อไปนี้
                  </span>
                  <span className=" text-base text-center">
                    <span className="text-gray-600 text-xl">
                      {" "}
                      ขั้นตอนที่ 1.
                    </span>
                    สมัครเข้ารับการสอบตามคุณสมบัติและเงื่อนไขในแต่ละรอบการสอบ
                    (รอบมหาวิทยาลัยรังสิตรับตรง / รอบ กสพท.)
                  </span>
                  <span className=" text-base text-center">
                    <span className="text-gray-600 text-xl">ขั้นตอนที่ 2.</span>
                    ผ่านการสอบข้อเขียนของมหาวิทยาลัยรังสิต หรือ
                    ผ่านการคัดเลือกตามระบบรับตรงของ กสพท.
                  </span>
                  <span className=" text-base text-center">
                    <span className="text-gray-600 text-xl">
                      {" "}
                      ขั้นตอนที่ 3.
                    </span>
                    ผ่านเกณฑ์การสอบวิชาเฉพาะทางการแพทย์และแบบทดสอบทางจิตวิทยาตามที่คณะกรรมการสอบ
                    สัมภาษณ์คัดเลือกผู้เข้าศึกษาวิทยาลัยแพทยศาสตร์กำหนด
                  </span>
                  <span className=" text-base text-center">
                    <span className="text-gray-600 text-xl">ขั้นตอนที่ 4.</span>
                    ผ่านการตรวจสุขภาพ
                    ตามที่คณะกรรมการสอบสัมภาษณ์คัดเลือกผู้เข้าศึกษาวิทยาลัยแพทยศาสตร์กำหนด
                  </span>
                  <span className=" text-base text-center">
                    <span className="text-gray-600 text-xl">ขั้นตอนที่ 5.</span>
                    ผ่านการสอบสัมภาษณ์
                    โดยคณะกรรมการสอบสัมภาษณ์คัดเลือกผู้เข้าศึกษาวิทยาลัยแพทยศาสตร์
                  </span>
                  <span className=" text-base text-center">
                    <span className="text-gray-600 text-xl">
                      {" "}
                      ขั้นตอนที่ 6.
                    </span>
                    วิทยาลัยแพทยศาสตร์ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา
                    ผู้มีรายชื่อลงทะเบียนการเป็นนักศึกษา
                  </span>
                </div>
                <div className=" max-lg:hidden overflow-hidden">
                  <img
                    src={"/image/Faculty/Scienc/Medicine/4.jpg"}
                    alt=""
                    className="rounded-lg shadow-lg max-md:shadow-none "
                    data-aos="fade-left"
                  ></img>
                </div>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center items-center bg-sky-200 ">
          <figure className="w-full overflow-hidden">
            <Image
              src="/image/Faculty/WaveTemplate/waveflip.png"
              alt=""
              width={2000}
              height={550}
              layout="responsive" // This maintains aspect ratio
            />
            <div className="flex justify-center items-center px-3">
              <div className="max-w-7xl w-full bg-white rounded-lg text-center">
                <div className="flex justify-center items-center flex-col shadow-lg px-5 py-5">
                  <span className="text-center text-sky-500  text-3xl">
                    รายละเอียดเพิ่มเติม
                  </span>
                  <span className="text-center text-xl">การรับสมัคร</span>
                  <span className="text-center text-gray-500">
                    ขอรับใบสมัครได้ที่ สำนักงานรับนักศึกษา มหาวิทยาลัยรังสิต
                    อาคารอาทิตย์ อุไรรัตน์ (ตึก 1) ชั้น 1
                  </span>
                  <span className="text-center text-gray-500">
                    โทร. 0-2791-5500-10 โทรสาร 0-2997-2394
                  </span>
                  <Link href={"www.facebook.com/rangsituniversity"}>
                    www.facebook.com/rangsituniversity
                  </Link>
                  <Link href={"www.rsu.ac.th/medicine"}>
                    www.rsu.ac.th/medicine
                  </Link>
                  <div className="flex justify-center items-center  text-white pt-3 ">
                    <button
                      className="bg-gray-500 px-3  py-2  flex items-center gap-2 rounded-l-lg"
                      data-bs-target="#exampleModalToggle"
                      data-bs-toggle="modal"
                      onClick={() =>
                        setData({
                          Faculty: "วิทยาลัยแพทยศาสตร์",
                          Major: "แพทยศาสตร์",
                          term1: "650,000",
                          term2: "650,000",
                          term3: "650,000",
                          term4: "650,000",
                          term5: "650,000",
                          term6: "650,000",
                          dsl: "2",
                          Allterm: "3,900,000",
                        })
                      }
                    >
                      <FaMoneyBillWave size={20} />
                      <span className="max-md:text-xs ">ค่าเทอม</span>
                    </button>
                    <Link
                      href={"/pages/RegisterLevel/Scholarships"}
                      className="no-underline text-white bg-gray-700 px-3  py-2  flex items-center gap-2 "
                    >
                      <FaMoneyCheckAlt size={20} />
                      <span className="max-md:text-xs">ทุนการศึกษา</span>
                    </Link>
                    <Link
                      href={"/pages/RegisterLevel"}
                      className="no-underline text-white bg-pink-600 px-3  py-2  flex items-center gap-2 rounded-r-lg"
                    >
                      <BsPeopleFill size={20} />
                      <span className="max-md:text-xs">สมัครเรียน</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </article>
        {/* Content Sciencehealth*/}
        <div className="bg-sky-200 bg-gradient-to-b from-sky-200 via-transparent to-orange-300 w-full h-64"></div>
        {/* Content COLLEGE OF ORIENTAL MEDICINE*/}
        <article className="flex justify-center items-center">
          <figure className="w-full  ">
            <div className=" w-full flex justify-center  relative bg-orange-300">
              <div className="max-w-7xl w-full ">
                <div className="flex justify-between mt-5 ">
                  <div className="top overflow-hidden">
                    <img
                      src={"/image/Faculty/Scienc/OrientalMedicine/11.png"}
                      alt=""
                      className="animation"
                      data-aos="fade-right"
                    ></img>
                  </div>
                  <div className=" flex justify-center">
                    <div className="flex flex-col md:mt-5 max-lg:mr-5 max-md:mt-0">
                      <span className="text-pink-600 text-3xl max-md:text-xl">
                        วิทยาลัยการแพทย์แผนตะวันออก
                      </span>
                      <span className="text-5xl max-md:text-3xl max-sm:text-base">
                        COLLEGE OF ORIENTAL MEDICINE
                      </span>
                      <span className="text-white text-xl max-md:text-base">
                        ใครสนใจความรู้ ทางการแพทย์แผนตะวันออก เปิดเทอมนี้
                        <span className="text-2xl text-pink-600  max-md:text-base">
                          มาอยู่ทีมเดียวกับเรานะ
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-full flex items-end border-b border-white">
                <Image
                  src={"/image/Faculty/WaveTemplate/wave.png"}
                  alt=""
                  className=""
                  width={2000}
                  height={550}

                ></Image>
              </div>
            </div>
            <div className="w-full flex justify-center pb-4">
              <div>
                <div className="flex justify-center m-3 ">
                  <Link
                    href={
                      "https://www.facebook.com/profile.php?id=100057508117641&ref=embed_page"
                    }
                  >
                    <Image
                      src={"/image/Faculty/Scienc/OrientalMedicine/Logo.jpg"}
                      alt=""
                      width={200}
                      height={400}
                      className="p-3"
                    ></Image>
                  </Link>
                </div>
                <p className="mt-4 text-base text-center max-md:px-5">
                  <span className="text-xl text-orange-500">วิสัยทัศน์:</span>
                  มุ่งสู่การเป็นสถาบันชั้นนำในการผลิตบัณฑิตด้านการแพทย์แผนตะวันออกในสาขาการแพทย์แผนไทย
                  การแพทย์แผนจีน และวิทยาศาสตรบัณฑิตสาขาการแพทย์แผนตะวันออก
                </p>
                <p className="mt-4 text-base text-center max-md:px-5">
                  <span className="text-xl text-orange-500">อัตลักษณ์:</span>
                  อนุรักษ์องค์ความรู้ดั้งเดิมของการแพทย์แผนไทย การแพทย์แผนจีน
                  และภูมิปัญญาการแพทย์แผนตะวันออก และพัฒนาสู่สากล ที่มุ่งเน้น
                  “นวัตกรรมสมุนไพรสร้างเศรษฐกิจ”
                  พร้อมเสริมสร้างองค์ความรู้ใหม่ที่สามารถบูรณาการทางการแพทย์และการพัฒนาผลิตภัณฑ์สมุนไพรเพิ่มมูลค่าทางเศรษฐกิจ
                  เพื่อประโยชน์ในการฟื้นฟู บำรุง ป้องกัน และรักษาโรคต่างๆ
                  แก่มวลมนุษยชาติด้วยความรู้ คู่คุณธรรม และ
                  สร้างสรรค์อย่างรับผิดชอบ
                </p>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center items-center">
          <figure className="max-w-7xl w-full">
            <div className="mb-4">
              <div className="grid grid-cols-1 items-center">
                <div className="flex flex-col justify-center text-center items-center px-5 max-md:pb-4">
                  <span className="text-3xl text-orange-500 mb-2">
                    หลักสูตรระดับปริญญาตรี
                  </span>
                </div>
                <div className="flex justify-center max-lg:hidden">
                  <Image
                    src={"/image/Faculty/WaveTemplate/Line.png"}
                    alt=""
                    className=""
                    width={800}
                    height={200}
                  ></Image>
                </div>
                <div className="p-2 overflow-hidden hidden  max-md:block">
                  <Image
                    src={"/image/Faculty/Scienc/OrientalMedicine/1.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-left"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
              </div>
              {/* หลักสูตร 1 */}
              <div className="grid grid-cols-2 max-lg:grid-cols-1 items-center md:my-4">
                <div className="flex flex-col justify-center items-center max-md:px-2 p-4">
                  <span className="text-xl text-center text-orange-500">
                    หลักสูตรที่ 1 วิทยาศาสตรบัณฑิต สาขาการแพทย์แผนตะวันออก ว.ทบ.
                    (การแพทย์แผนตะวันออก) Bachelor of Science (Oriental
                    Medicine) B.SC.(Oriental Medicine)
                  </span>
                  <span className="text-xl text-center max-md:px-5 ">
                    ระยะเวลา 4 ปี จำนวน 132 หน่วยกิต
                  </span>
                  <li className="text-gray-500 text-base text-center py-2">
                    ฝึกปฏิบัติงานทางด้านการวิจัยและพัฒนาผลิตภัณฑ์สมุนไพร
                    การผลิตและควบคุมคุณภาพผลิตภัณฑ์สมุนไพรในสถานที่ผลิตยาสมุนไพรมาตรฐานสากล
                  </li>
                  <li className="text-gray-500 text-base text-center py-2">
                    มีสิทธิ์สอบใบประกอบโรคศิลป์แพทย์แผนไทย 2 สาขา คือ
                    เวชกรรมไทยและเภสัชกรรมไทย
                  </li>
                  <li className="text-gray-500 text-base text-center py-2">
                    เป็นหลักสูตรที่ได้รับการรับรองคุณวุฒิจากกระทรวงอุดมศึกษา
                    วิทยาศาสตร์ วิจัยและนวัตกรรม (อว.) และ
                    คณะกรรมการข้าราชการพลเรือน (กพ.)
                  </li>
                  <div className="flex justify-center items-center  text-white pt-3 ">
                    <button
                      className="bg-gray-500 px-3  py-2  flex items-center gap-2 rounded-l-lg"
                      data-bs-target="#exampleModalToggle"
                      data-bs-toggle="modal"
                      onClick={() =>
                        setData({
                          Faculty: "วิทยาลัยการแพทย์แผนตะวันออก",
                          Major: " สาขาวิชาการแพทย์แผนตะวันออก",
                          term1: "172,000",
                          term2: "165,500",
                          term3: "102,900",
                          term4: "116,500",
                          term5: "-",
                          term6: "-",
                          dsl: "2",
                          Allterm: "553,900",
                        })
                      }
                    >
                      <FaMoneyBillWave size={20} />
                      <span className="max-md:text-xs ">ค่าเทอม</span>
                    </button>
                    <Link
                      href={"/pages/RegisterLevel/Scholarships"}
                      className="no-underline text-white bg-gray-700 px-3  py-2  flex items-center gap-2 "
                    >
                      <FaMoneyCheckAlt size={20} />
                      <span className="max-md:text-xs">ทุนการศึกษา</span>
                    </Link>
                    <Link
                      href={"/pages/RegisterLevel"}
                      className="no-underline text-white bg-pink-600 px-3  py-2  flex items-center gap-2 rounded-r-lg"
                    >
                      <BsPeopleFill size={20} />
                      <span className="max-md:text-xs">สมัครเรียน</span>
                    </Link>
                  </div>
                </div>
                <div className="overflow-hidden max-md:hidden">
                  <Image
                    src={"/image/Faculty/Scienc/OrientalMedicine/1.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-left"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
              </div>
              {/* Line */}
              <div className="flex justify-center max-lg:hidden">
                <Image
                  src={"/image/Faculty/WaveTemplate/line3.png"}
                  alt=""
                  className=""
                  width={800}
                  height={200}
                ></Image>
              </div>

              {/* หลักสูตร 1 */}

              {/* หลักสูตร 2 */}
              <div className="grid grid-cols-2 md:mt-3  max-lg:grid-cols-1 items-center">
                <div className="hidden px-2  max-lg:block mb-3 overflow-hidden">
                  <Image
                    src={"/image/Faculty/Scienc/OrientalMedicine/2.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-right"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
                <div className=" max-lg:hidden overflow-hidden">
                  <Image
                    src={"/image/Faculty/Scienc/OrientalMedicine/2.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-right"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
                <div className="flex flex-col justify-center text-center items-center  max-md:pb-5 ">
                  <span className="text-xl text-orange-500 pb-2">
                    หลักสูตรที่ 2. การแพทย์แผนจีนบัณฑิต (พจ.บ.) Bachelor of
                    Traditional Chinese Medicine (B.CM.)
                  </span>
                  <span className="text-xl text-center max-md:px-5 ">
                    ระยะเวลา 6 ปีการศึกษา จำนวน 192 หน่วยกิต
                  </span>
                  <li className="text-red-500 text-base text-center py-2">
                    ศึกษาที่มหาวิทยาลัยรังสิตประมาณ 3.5 ปีการศึกษา
                  </li>
                  <li className="text-red-500 text-base text-center py-2">
                    และที่มหาวิทยาลัยการแพทย์แผนจีนนานกิงประมาณ 2.5 ปีการศึกษา
                  </li>
                  <li className="text-gray-500 text-base text-center py-2">
                    เป็นหลักสูตรที่ได้รับการรับรองคุณวุฒิจากกระทรวงอุดมศึกษา
                    วิทยาศาสตร์ วิจัยและนวัตกรรม (อว.) และ
                    คณะกรรมการข้าราชการพลเรือน (กพ.)
                  </li>
                  <div className="flex justify-center items-center  text-white pt-3 ">
                    <button
                      className="bg-gray-500 px-3  py-2  flex items-center gap-2 rounded-l-lg"
                      data-bs-target="#exampleModalToggle"
                      data-bs-toggle="modal"
                      onClick={() =>
                        setData({
                          Faculty: "วิทยาลัยการแพทย์แผนตะวันออก",
                          Major: "สาขาวิชาการแพทย์แผนไทย",
                          term1: "142,900",
                          term2: "199,000",
                          term3: "165,200",
                          term4: "105,000",
                          term5: "-",
                          term6: "-",
                          dsl: "2",
                          Allterm: "612,100",
                        })
                      }
                    >
                      <FaMoneyBillWave size={20} />
                      <span className="max-md:text-xs ">ค่าเทอม</span>
                    </button>
                    <Link
                      href={"/pages/RegisterLevel/Scholarships"}
                      className="no-underline text-white bg-gray-700 px-3  py-2  flex items-center gap-2 "
                    >
                      <FaMoneyCheckAlt size={20} />
                      <span className="max-md:text-xs">ทุนการศึกษา</span>
                    </Link>
                    <Link
                      href={"/pages/RegisterLevel"}
                      className="no-underline text-white bg-pink-600 px-3  py-2  flex items-center gap-2 rounded-r-lg"
                    >
                      <BsPeopleFill size={20} />
                      <span className="max-md:text-xs">สมัครเรียน</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Line */}
              <div className="flex justify-center max-lg:hidden mt-3">
                <Image
                  src={"/image/Faculty/WaveTemplate/Line2.png"}
                  alt=""
                  className=""
                  width={800}
                  height={200}
                ></Image>
              </div>
              {/* หลักสูตร 2 */}

              {/* หลักสูตร 3 */}
              <div className="grid grid-cols-2 max-lg:grid-cols-1 items-center md:my-4">
                <div className="hidden px-2  max-lg:block  overflow-hidden">
                  <Image
                    src={"/image/Faculty/Scienc/OrientalMedicine/3.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-left"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
                <div className="flex flex-col justify-center items-center max-md:px-2 p-4">
                  <span className="text-xl text-center text-orange-500">
                    หลักสูตรที่ 3 การแพทย์แผนไทยบัณฑิต (พท.บ.) Bachelor of Thai
                    Traditional Medicine (B.TM.)
                  </span>
                  <span className="text-xl text-center max-md:px-5 ">
                    ระยะเวลา 4 ปี จำนวน 143 หน่วยกิต
                  </span>
                  <span className="text-xl text-center max-md:px-5 ">
                    เนื้อหาหลักสูตรเป็นไปตามมาตรฐานของสภาการแพทย์แผนไทย
                  </span>
                  <li className="text-gray-500 text-base text-center py-2">
                    เวชกรรมไทย
                    การตรวจรักษาโดยศาสตร์การแพทย์แผนไทยผสมผสานกับการแพทย์แผนปัจจุบัน
                  </li>
                  <li className="text-gray-500 text-base text-center py-2">
                    นวดไทย การนวดรักษา นวดส่งเสริมสุขภาพ นวดผ่อนคลาย นวดสปา
                    นวดเท้า
                  </li>
                  <li className="text-gray-500 text-base text-center py-2">
                    ผดุงครรภ์ไทย การดูแลสุขภาพแม่ ก่อนและหลังคลอด
                    ด้วยศาสตร์การแพทย์แผนไทย
                  </li>
                  <div className="flex justify-center items-center  text-white pt-3 ">
                    <button
                      className="bg-gray-500 px-3  py-2  flex items-center gap-2 rounded-l-lg"
                      data-bs-target="#exampleModalToggle"
                      data-bs-toggle="modal"
                      onClick={() =>
                        setData({
                          Faculty: "วิทยาลัยการแพทย์แผนตะวันออก",
                          Major: "สาขาวิชาการแพทย์แผนไทย",
                          term1: "142,900",
                          term2: "199,000",
                          term3: "165,200",
                          term4: "105,000",
                          term5: "-",
                          term6: "-",
                          dsl: "2",
                          Allterm: "612,100",
                        })
                      }
                    >
                      <FaMoneyBillWave size={20} />
                      <span className="max-md:text-xs ">ค่าเทอม</span>
                    </button>
                    <Link
                      href={"/pages/RegisterLevel/Scholarships"}
                      className="no-underline text-white bg-gray-700 px-3  py-2  flex items-center gap-2 "
                    >
                      <FaMoneyCheckAlt size={20} />
                      <span className="max-md:text-xs">ทุนการศึกษา</span>
                    </Link>
                    <Link
                      href={"/pages/RegisterLevel"}
                      className="no-underline text-white bg-pink-600 px-3  py-2  flex items-center gap-2 rounded-r-lg"
                    >
                      <BsPeopleFill size={20} />
                      <span className="max-md:text-xs">สมัครเรียน</span>
                    </Link>
                  </div>
                </div>
                <div className=" overflow-hidden max-md:hidden">
                  <Image
                    src={"/image/Faculty/Scienc/OrientalMedicine/3.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-left"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
              </div>
              <div className="flex justify-center max-lg:hidden">
                <Image
                  src={"/image/Faculty/WaveTemplate/line3.png"}
                  alt=""
                  className=""
                  width={800}
                  height={200}
                ></Image>
              </div>
              {/* หลักสูตร 3 */}

              {/* หลักสูตร 4 */}
              <div className="grid grid-cols-2 max-lg:grid-cols-1 items-center md:my-4">
                <div className="hidden px-2  max-lg:block  overflow-hidden">
                  <Image
                    src={"/image/Faculty/Scienc/OrientalMedicine/4.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-right"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
                <div className=" overflow-hidden max-md:hidden">
                  <Image
                    src={"/image/Faculty/Scienc/OrientalMedicine/4.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-left"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
                <div className="flex flex-col justify-center items-center max-md:px-2 p-4">
                  <span className="text-xl text-center text-orange-500">
                    หลักสูตรประกาศนียบัตรวิชาชีพการแพทย์แผนไทย
                  </span>
                  <span className="text-xl text-center max-md:px-5 ">
                    เรียนเสาร์-อาทิตย์ 3 ปี สำหรับคนทำงานแล้ว
                    ผู้ประกอบการและผู้สนใจ
                  </span>
                  <span className="text-base text-center max-md:px-5 ">
                    หลักสูตรประกาศนียบัตรวิชาชีพการแพทย์แผนไทย (ก)
                    ด้านเภสัชกรรมไทย และ เวชกรรมไทย
                    เป็นหลักสูตรมาตรฐานที่ได้รับการรับรองจากสภาการแพทย์แผนไทย
                    การจัดการเรียนการสอนในหลักสูตรนี้{" "}
                    <span className="text-red-500">
                      เหมาะสำหรับผู้ที่ต้องการ
                    </span>
                  </span>
                  <li className="text-gray-500 text-base text-center py-2">
                    เป็นเภสัชกรแผนไทยที่มีใบอนุญาตเป็นผู้ประกอบวิชาชีพ
                    สามารถทำงานในโรงงานผลิตยาแผนไทย ร้านขายยาแผนไทย
                    หรือเจ้าของผลิตภัณฑ์สมุนไพร
                  </li>
                  <li className="text-gray-500 text-base text-center py-2">
                    เป็นแพทย์แผนไทย ที่มีใบอนุญาตประกอบวิชาชีพ
                    สามารถทำงานในสถานพยาบาลและเปิดคลินิกแพทย์แผนไทยของตนเอง
                  </li>
                  <li className="text-gray-500 text-base text-center py-2">
                    เป็นผู้ประกอบการธุรกิจด้านสุขภาพ พัฒนาต่อยอดผลิตภัณฑ์ใหม่
                  </li>
                </div>
              </div>

              {/* หลักสูตร 4 */}
            </div>
          </figure>
        </article>
        <article className="flex justify-center items-center bg-orange-200 pb-5">
          <figure className="w-full overflow-hidden">
            <Image
              src="/image/Faculty/WaveTemplate/waveflip.png"
              alt=""
              width={2000}
              height={550}
              layout="responsive" // This maintains aspect ratio
            />
            <div className="flex justify-center items-center px-3">
              <div className="max-w-7xl w-full bg-white rounded-lg text-center">
                <div className="flex justify-center items-center flex-col shadow-lg px-5 py-5">
                  <span className="text-center text-orange-500  text-3xl">
                    รายละเอียดเพิ่มเติม
                  </span>
                  <span className="text-center text-xl">การรับสมัคร</span>
                  <span className="text-center text-gray-500">
                    ขอรับใบสมัครได้ที่ สำนักงานรับนักศึกษา มหาวิทยาลัยรังสิต
                    อาคารอาทิตย์ อุไรรัตน์ (ตึก 1) ชั้น 1
                  </span>
                  <span className="text-center text-gray-500">
                    โทร. 0-2791-5500-10 โทรสาร 0-2997-2394
                  </span>
                  <Link href={"www.facebook.com/rangsituniversity"}>
                    www.facebook.com/rangsituniversity
                  </Link>
                  <Link href={"https://www.facebook.com/orientalmedrsu"}>
                    https://www.facebook.com/orientalmedrsu
                  </Link>
                </div>
              </div>
            </div>
          </figure>
        </article>
        {/* Content Sciencehealth*/}

        <div className="bg-orange-200 bg-gradient-to-b from-orange-200 via-transparent to-lime-700 w-full h-64"></div>

        {/* Content COLLEGE OF pharmacy*/}
        <article className="flex justify-center items-center">
          <figure className="w-full  ">
            <div className=" w-full flex justify-center  relative bg-lime-700">
              <div className="max-w-7xl w-full ">
                <div className="flex justify-between mt-5 ">
                  <div className=" flex justify-center">
                    <div className="flex flex-col md:mt-5 max-lg:ml-5 max-md:mt-0">
                      <span className="text-white text-3xl max-md:text-xl">
                        วิทยาลัยเภสัชศาสตร์
                      </span>
                      <span className="text-black text-5xl max-md:text-3xl max-sm:text-base">
                        COLLEGE OF PHARMACY
                      </span>
                      <span className="text-white text-xl max-md:text-base">
                        ใครอยากเป็นเภสัชกร สนใจเรื่องยา เปิดเทอมนี้
                        <span className="text-2xl text-white  max-md:text-base">
                          "มาอยู่ทีมเดียวกับเรานะ"
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="top overflow-hidden">
                    <img
                      src={"/image/Faculty/Scienc/Pharmacy/1.png"}
                      alt=""
                      className="animation"
                      data-aos="fade-left"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="absolute h-full flex items-end border-b border-white">
                <Image
                  src={"/image/Faculty/WaveTemplate/wave.png"}
                  alt=""
                  className=""
                  width={2000}
                  height={550}

                ></Image>
              </div>
            </div>
            <div className="w-full flex justify-center pb-4">
              <div>
                <div className="flex justify-center m-3 ">
                  <Link href={"https://www.facebook.com/rangsitpharmacy"}>
                    <Image
                      src={"/image/Faculty/Scienc/Pharmacy/Logo.jpg"}
                      alt=""
                      width={200}
                      height={400}
                      className="p-3"
                    ></Image>
                  </Link>
                </div>
                <p className="mt-4 text-base text-center max-md:px-5">
                  <span className="text-xl text-lime-500">วิสัยทัศน์:</span>
                  มุ่งผลิตเภสัชกรที่รอบรู้ คู่คุณธรรม บูรณาการความรู้สู่สังคม
                </p>
                <p className="mt-4 text-base text-center max-md:px-5">
                  <span className="text-xl text-lime-500">อัตลักษณ์:</span>
                  ความรู้ คู่คุณธรรม สร้างสรรค์อย่างรับผิดชอบ
                </p>
                <p className="mt-4 text-base text-center max-md:px-5">
                  <span className="text-xl text-lime-500">
                    จุดเด่นของหลักสูตร:
                  </span>
                  บัณฑิตทุกคนมีความรู้
                  และทักษะเกี่ยวกับงานด้านเภสัชกรรมอย่างครบถ้วน อาทิเช่น
                  การผลิตยา เครื่องสำอาง การควบคุมคุณภาพยาและเภสัชภัณฑ์
                  การวิจัยและพัฒนายา การบริหาร การตลาดยา การคุ้มครองผู้บริโภค
                  และการบริบาลทางเภสัชกรรม ทั้งในโรงพยาบาลและร้านยา
                  โดยหลักสูตรมุ่งเน้นพัฒนาทักษะและประสบการณ์ในวิชาชีพเภสัชศาสตร์ด้วยการฝึกปฏิบัติงานจริงกว่า
                  2,000 ชั่วโมง
                </p>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center items-center">
          <figure className="max-w-7xl w-full">
            <div className="mb-4">
              <div className="grid grid-cols-1 items-center">
                <div className="flex flex-col justify-center text-center items-center px-5 max-md:pb-4">
                  <span className="text-3xl text-lime-500 mb-2">
                    หลักสูตรระดับปริญญาตรี
                  </span>
                </div>
                <div className="flex justify-center max-lg:hidden">
                  <Image
                    src={"/image/Faculty/WaveTemplate/Line.png"}
                    alt=""
                    className=""
                    width={800}
                    height={200}
                  ></Image>
                </div>
                <div className="p-2 overflow-hidden hidden  max-md:block">
                  <Image
                    src={"/image/Faculty/Scienc/OrientalMedicine/1.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-left"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
              </div>
              {/* หลักสูตร 1 */}
              <div className="grid grid-cols-2 max-lg:grid-cols-1 items-center md:my-4">
                <div className="flex flex-col justify-center items-center max-md:px-2 p-4">
                  <span className="text-xl text-center text-orange-500">
                    หลักสูตรที่ 1 วิทยาศาสตรบัณฑิต สาขาการแพทย์แผนตะวันออก ว.ทบ.
                    (การแพทย์แผนตะวันออก) Bachelor of Science (Oriental
                    Medicine) B.SC.(Oriental Medicine)
                  </span>
                  <span className="text-xl text-center max-md:px-5 ">
                    ระยะเวลา 4 ปี จำนวน 132 หน่วยกิต
                  </span>
                  <li className="text-gray-500 text-base text-center py-2">
                    ฝึกปฏิบัติงานทางด้านการวิจัยและพัฒนาผลิตภัณฑ์สมุนไพร
                    การผลิตและควบคุมคุณภาพผลิตภัณฑ์สมุนไพรในสถานที่ผลิตยาสมุนไพรมาตรฐานสากล
                  </li>
                  <li className="text-gray-500 text-base text-center py-2">
                    มีสิทธิ์สอบใบประกอบโรคศิลป์แพทย์แผนไทย 2 สาขา คือ
                    เวชกรรมไทยและเภสัชกรรมไทย
                  </li>
                  <li className="text-gray-500 text-base text-center py-2">
                    เป็นหลักสูตรที่ได้รับการรับรองคุณวุฒิจากกระทรวงอุดมศึกษา
                    วิทยาศาสตร์ วิจัยและนวัตกรรม (อว.) และ
                    คณะกรรมการข้าราชการพลเรือน (กพ.)
                  </li>
                  <div className="flex justify-center items-center  text-white pt-3 ">
                    <button
                      className="bg-gray-500 px-3  py-2  flex items-center gap-2 rounded-l-lg"
                      data-bs-target="#exampleModalToggle"
                      data-bs-toggle="modal"
                      onClick={() =>
                        setData({
                          Faculty: "วิทยาลัยการแพทย์แผนตะวันออก",
                          Major: " สาขาวิชาการแพทย์แผนตะวันออก",
                          term1: "172,000",
                          term2: "165,500",
                          term3: "102,900",
                          term4: "116,500",
                          term5: "-",
                          term6: "-",
                          dsl: "2",
                          Allterm: "553,900",
                        })
                      }
                    >
                      <FaMoneyBillWave size={20} />
                      <span className="max-md:text-xs ">ค่าเทอม</span>
                    </button>
                    <Link
                      href={"/pages/RegisterLevel/Scholarships"}
                      className="no-underline text-white bg-gray-700 px-3  py-2  flex items-center gap-2 "
                    >
                      <FaMoneyCheckAlt size={20} />
                      <span className="max-md:text-xs">ทุนการศึกษา</span>
                    </Link>
                    <Link
                      href={"/pages/RegisterLevel"}
                      className="no-underline text-white bg-pink-600 px-3  py-2  flex items-center gap-2 rounded-r-lg"
                    >
                      <BsPeopleFill size={20} />
                      <span className="max-md:text-xs">สมัครเรียน</span>
                    </Link>
                  </div>
                </div>
                <div className="overflow-hidden max-md:hidden">
                  <Image
                    src={"/image/Faculty/Scienc/OrientalMedicine/1.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-left"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
              </div>
              {/* Line */}
              <div className="flex justify-center max-lg:hidden">
                <Image
                  src={"/image/Faculty/WaveTemplate/line3.png"}
                  alt=""
                  className=""
                  width={800}
                  height={200}
                ></Image>
              </div>

              {/* หลักสูตร 1 */}

              {/* หลักสูตร 2 */}
              <div className="grid grid-cols-2 md:mt-3  max-lg:grid-cols-1 items-center">
                <div className="hidden px-2  max-lg:block mb-3 overflow-hidden">
                  <Image
                    src={"/image/Faculty/Scienc/OrientalMedicine/2.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-right"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
                <div className=" max-lg:hidden overflow-hidden">
                  <Image
                    src={"/image/Faculty/Scienc/OrientalMedicine/2.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-right"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
                <div className="flex flex-col justify-center text-center items-center  max-md:pb-5 ">
                  <span className="text-xl text-orange-500 pb-2">
                    หลักสูตรที่ 2. การแพทย์แผนจีนบัณฑิต (พจ.บ.) Bachelor of
                    Traditional Chinese Medicine (B.CM.)
                  </span>
                  <span className="text-xl text-center max-md:px-5 ">
                    ระยะเวลา 6 ปีการศึกษา จำนวน 192 หน่วยกิต
                  </span>
                  <li className="text-red-500 text-base text-center py-2">
                    ศึกษาที่มหาวิทยาลัยรังสิตประมาณ 3.5 ปีการศึกษา
                  </li>
                  <li className="text-red-500 text-base text-center py-2">
                    และที่มหาวิทยาลัยการแพทย์แผนจีนนานกิงประมาณ 2.5 ปีการศึกษา
                  </li>
                  <li className="text-gray-500 text-base text-center py-2">
                    เป็นหลักสูตรที่ได้รับการรับรองคุณวุฒิจากกระทรวงอุดมศึกษา
                    วิทยาศาสตร์ วิจัยและนวัตกรรม (อว.) และ
                    คณะกรรมการข้าราชการพลเรือน (กพ.)
                  </li>
                  <div className="flex justify-center items-center  text-white pt-3 ">
                    <button
                      className="bg-gray-500 px-3  py-2  flex items-center gap-2 rounded-l-lg"
                      data-bs-target="#exampleModalToggle"
                      data-bs-toggle="modal"
                      onClick={() =>
                        setData({
                          Faculty: "วิทยาลัยการแพทย์แผนตะวันออก",
                          Major: "สาขาวิชาการแพทย์แผนไทย",
                          term1: "142,900",
                          term2: "199,000",
                          term3: "165,200",
                          term4: "105,000",
                          term5: "-",
                          term6: "-",
                          dsl: "2",
                          Allterm: "612,100",
                        })
                      }
                    >
                      <FaMoneyBillWave size={20} />
                      <span className="max-md:text-xs ">ค่าเทอม</span>
                    </button>
                    <Link
                      href={"/pages/RegisterLevel/Scholarships"}
                      className="no-underline text-white bg-gray-700 px-3  py-2  flex items-center gap-2 "
                    >
                      <FaMoneyCheckAlt size={20} />
                      <span className="max-md:text-xs">ทุนการศึกษา</span>
                    </Link>
                    <Link
                      href={"/pages/RegisterLevel"}
                      className="no-underline text-white bg-pink-600 px-3  py-2  flex items-center gap-2 rounded-r-lg"
                    >
                      <BsPeopleFill size={20} />
                      <span className="max-md:text-xs">สมัครเรียน</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Line */}
              <div className="flex justify-center max-lg:hidden mt-3">
                <Image
                  src={"/image/Faculty/WaveTemplate/Line2.png"}
                  alt=""
                  className=""
                  width={800}
                  height={200}
                ></Image>
              </div>
              {/* หลักสูตร 2 */}

              {/* หลักสูตร 3 */}
              <div className="grid grid-cols-2 max-lg:grid-cols-1 items-center md:my-4">
                <div className="hidden px-2  max-lg:block  overflow-hidden">
                  <Image
                    src={"/image/Faculty/Scienc/OrientalMedicine/3.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-left"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
                <div className="flex flex-col justify-center items-center max-md:px-2 p-4">
                  <span className="text-xl text-center text-orange-500">
                    หลักสูตรที่ 3 การแพทย์แผนไทยบัณฑิต (พท.บ.) Bachelor of Thai
                    Traditional Medicine (B.TM.)
                  </span>
                  <span className="text-xl text-center max-md:px-5 ">
                    ระยะเวลา 4 ปี จำนวน 143 หน่วยกิต
                  </span>
                  <span className="text-xl text-center max-md:px-5 ">
                    เนื้อหาหลักสูตรเป็นไปตามมาตรฐานของสภาการแพทย์แผนไทย
                  </span>
                  <li className="text-gray-500 text-base text-center py-2">
                    เวชกรรมไทย
                    การตรวจรักษาโดยศาสตร์การแพทย์แผนไทยผสมผสานกับการแพทย์แผนปัจจุบัน
                  </li>
                  <li className="text-gray-500 text-base text-center py-2">
                    นวดไทย การนวดรักษา นวดส่งเสริมสุขภาพ นวดผ่อนคลาย นวดสปา
                    นวดเท้า
                  </li>
                  <li className="text-gray-500 text-base text-center py-2">
                    ผดุงครรภ์ไทย การดูแลสุขภาพแม่ ก่อนและหลังคลอด
                    ด้วยศาสตร์การแพทย์แผนไทย
                  </li>
                  <div className="flex justify-center items-center  text-white pt-3 ">
                    <button
                      className="bg-gray-500 px-3  py-2  flex items-center gap-2 rounded-l-lg"
                      data-bs-target="#exampleModalToggle"
                      data-bs-toggle="modal"
                      onClick={() =>
                        setData({
                          Faculty: "วิทยาลัยการแพทย์แผนตะวันออก",
                          Major: "สาขาวิชาการแพทย์แผนไทย",
                          term1: "142,900",
                          term2: "199,000",
                          term3: "165,200",
                          term4: "105,000",
                          term5: "-",
                          term6: "-",
                          dsl: "2",
                          Allterm: "612,100",
                        })
                      }
                    >
                      <FaMoneyBillWave size={20} />
                      <span className="max-md:text-xs ">ค่าเทอม</span>
                    </button>
                    <Link
                      href={"/pages/RegisterLevel/Scholarships"}
                      className="no-underline text-white bg-gray-700 px-3  py-2  flex items-center gap-2 "
                    >
                      <FaMoneyCheckAlt size={20} />
                      <span className="max-md:text-xs">ทุนการศึกษา</span>
                    </Link>
                    <Link
                      href={"/pages/RegisterLevel"}
                      className="no-underline text-white bg-pink-600 px-3  py-2  flex items-center gap-2 rounded-r-lg"
                    >
                      <BsPeopleFill size={20} />
                      <span className="max-md:text-xs">สมัครเรียน</span>
                    </Link>
                  </div>
                </div>
                <div className=" overflow-hidden max-md:hidden">
                  <Image
                    src={"/image/Faculty/Scienc/OrientalMedicine/3.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-left"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
              </div>
              <div className="flex justify-center max-lg:hidden">
                <Image
                  src={"/image/Faculty/WaveTemplate/line3.png"}
                  alt=""
                  className=""
                  width={800}
                  height={200}
                ></Image>
              </div>
              {/* หลักสูตร 3 */}

              {/* หลักสูตร 4 */}
              <div className="grid grid-cols-2 max-lg:grid-cols-1 items-center md:my-4">
                <div className="hidden px-2  max-lg:block  overflow-hidden">
                  <Image
                    src={"/image/Faculty/Scienc/OrientalMedicine/4.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-right"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
                <div className=" overflow-hidden max-md:hidden">
                  <Image
                    src={"/image/Faculty/Scienc/OrientalMedicine/4.jpg"}
                    alt=""
                    className="rounded-lg md:shadow-lg"
                    data-aos="fade-left"
                    width={2000}
                    height={550}
  
                  ></Image>
                </div>
                <div className="flex flex-col justify-center items-center max-md:px-2 p-4">
                  <span className="text-xl text-center text-orange-500">
                    หลักสูตรประกาศนียบัตรวิชาชีพการแพทย์แผนไทย
                  </span>
                  <span className="text-xl text-center max-md:px-5 ">
                    เรียนเสาร์-อาทิตย์ 3 ปี สำหรับคนทำงานแล้ว
                    ผู้ประกอบการและผู้สนใจ
                  </span>
                  <span className="text-base text-center max-md:px-5 ">
                    หลักสูตรประกาศนียบัตรวิชาชีพการแพทย์แผนไทย (ก)
                    ด้านเภสัชกรรมไทย และ เวชกรรมไทย
                    เป็นหลักสูตรมาตรฐานที่ได้รับการรับรองจากสภาการแพทย์แผนไทย
                    การจัดการเรียนการสอนในหลักสูตรนี้{" "}
                    <span className="text-red-500">
                      เหมาะสำหรับผู้ที่ต้องการ
                    </span>
                  </span>
                  <li className="text-gray-500 text-base text-center py-2">
                    เป็นเภสัชกรแผนไทยที่มีใบอนุญาตเป็นผู้ประกอบวิชาชีพ
                    สามารถทำงานในโรงงานผลิตยาแผนไทย ร้านขายยาแผนไทย
                    หรือเจ้าของผลิตภัณฑ์สมุนไพร
                  </li>
                  <li className="text-gray-500 text-base text-center py-2">
                    เป็นแพทย์แผนไทย ที่มีใบอนุญาตประกอบวิชาชีพ
                    สามารถทำงานในสถานพยาบาลและเปิดคลินิกแพทย์แผนไทยของตนเอง
                  </li>
                  <li className="text-gray-500 text-base text-center py-2">
                    เป็นผู้ประกอบการธุรกิจด้านสุขภาพ พัฒนาต่อยอดผลิตภัณฑ์ใหม่
                  </li>
                </div>
              </div>

              {/* หลักสูตร 4 */}
            </div>
          </figure>
        </article>
        <article className="flex justify-center items-center bg-orange-200 pb-5">
          <figure className="w-full overflow-hidden">
            <Image
              src="/image/Faculty/WaveTemplate/waveflip.png"
              alt=""
              width={2000}
              height={550}
              layout="responsive" // This maintains aspect ratio
            />
            <div className="flex justify-center items-center px-3">
              <div className="max-w-7xl w-full bg-white rounded-lg text-center">
                <div className="flex justify-center items-center flex-col shadow-lg px-5 py-5">
                  <span className="text-center text-orange-500  text-3xl">
                    รายละเอียดเพิ่มเติม
                  </span>
                  <span className="text-center text-xl">การรับสมัคร</span>
                  <span className="text-center text-gray-500">
                    ขอรับใบสมัครได้ที่ สำนักงานรับนักศึกษา มหาวิทยาลัยรังสิต
                    อาคารอาทิตย์ อุไรรัตน์ (ตึก 1) ชั้น 1
                  </span>
                  <span className="text-center text-gray-500">
                    โทร. 0-2791-5500-10 โทรสาร 0-2997-2394
                  </span>
                  <Link href={"www.facebook.com/rangsituniversity"}>
                    www.facebook.com/rangsituniversity
                  </Link>
                  <Link href={"https://www.facebook.com/orientalmedrsu"}>
                    https://www.facebook.com/orientalmedrsu
                  </Link>
                </div>
              </div>
            </div>
          </figure>
        </article>
        {/* Content pharmacy*/}
      </main>
      <Footer />
    </>
  );
}
