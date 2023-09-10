"use client";
import Footer from "@/app/components/Footer";
import NavbarRegister from "@/app/components/NavbarRegister";
import Image from "next/image";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import LoanfundTable from "./TableComponents/LoanfundTable";

export default function LoanFundDSL() {
  const [property, setProperty] = useState({
    nature: "",
    feature1: "",
    feature2: "",
    feature3: "",
    feature4: "",
    feature5: "",
    feature6: "",
    feature7: "",
  });
  console.log(property);
  return (
    <>
      {/* Model */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="flex justify-center items-center">
                <div className="mt-4">
                  <p className="text-2xl text-pink-600 text-center">
                    คุณสมบัติของผู้กู้ยืมฯ (ลักษณะที่ {property.nature})
                  </p>
                  <div className="flex flex-col mt-2 text-center text-sm max-md:text-xs">
                    <p>
                      <span className="text-pink-600">-</span>
                      {property.feature1}
                    </p>
                    <p>
                      <span className="text-pink-600">-</span>
                      {property.feature2}
                    </p>
                    <p>
                      <span className="text-pink-600">-</span>
                      {property.feature3}
                    </p>
                    <p>
                      <span className="text-pink-600">-</span>
                      {property.feature4}
                    </p>
                    <p>
                      <span className="text-pink-600">-</span>
                      {property.feature5}
                    </p>
                    <p>
                      <span className="text-pink-600">-</span>
                      {property.feature6}
                    </p>
                    <p>
                      <span className="text-pink-600">-</span>
                      {property.feature7}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="border p-2 text-sm"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      ></div>
      {/* Model End */}

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

        <article className="flex justify-center items-center  bg-sky-500">
          <figure className="max-w-7xl  w-full my-3 mx-2 flex justify-between text-white">
            <Link
              href={"/pages/RegisterLevel/LoanFund"}
              className="text-2xl max-md:text- no-underline text-white max-md:text-base"
            >
              กองทุนกู้ยืมฯ
            </Link>
            <div className="flex items-center gap-1 max-md:gap-0">
              <Link
                href={"/"}
                className="text-xl max-md:text-sm  no-underline text-white max-md:text-xs"
              >
                หน้าแรก
              </Link>
              <span className="max-md:text-xs">/</span>
              <Link
                href={"/pages/RegisterLevel/LoanFund"}
                className="text-xl max-md:text-sm no-underline text-white max-md:text-xs"
              >
                กองทุนกู้ยืมฯ
              </Link>
              <span className="max-md:text-xs">/</span>
              <span className="text-xl max-md:text-sm no-underline text-white  max-md:text-xs">
                ปริญญาตรี 2566
              </span>
            </div>
          </figure>
        </article>

        <article className="flex justify-center items-center ">
          <figure className="max-w-7xl w-full my-3 mx-2  text-white">
            <div className="flex  justify-center">
              <Image
                src="/image/LoanFund/dsl1.jpg"
                alt=""
                width={850}
                height={1000}
                className="max-md:w-full"
              />
            </div>
            <p className="w-full h-0.5 bg-pink-600 mt-4"></p>
            <p className="mt-3 text-black text-2xl text-center  max-md:text-xl mb-3">
              รายละเอียดการกู้ยืมเงินกองทุนกู้ยืมเพื่อการศึกษา
            </p>
            <div className="flex items-center justify-center gap-2 ">
              <button
                className="bg-pink-600 px-3 py-2 max-md:p-1 max-md:text-xs hover:bg-sky-500 duration-300"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={() =>
                  setProperty({
                    nature: "1",
                    feature1:
                      "รายครอบครัวไม่เกิน 360,000 บาท/ปี (ไม่หักค่าใช้จ่าย)",
                    feature2: "มีสัญชาติไทย",
                    feature3: "อายุไม่เกิน 30 ปีบริบูรณ์",
                    feature4:
                      "ต้องไม่เป็นผู้ปฏิบัติงานและรับเงินเดือนหรือค่าจ้างในหน่วยงานของรัฐหรือเอกชนในลักษณะเต็มเวลา",
                    feature5: "ไม่เคยสำเร็จการศึกษาระดับปริญญาตรี",
                    feature6: "ไม่เคยเป็นหรือเป็นผู้ผิดนัดชำระหนี้กองทุนฯ",
                    feature7: "สมัครเรียนในสาขาตามประกาศที่กองทุนฯ กำหนด",
                  })
                }
              >
                ผู้กู้ยืมฯ (ลักษณะที่ 1)
              </button>
              <button
                className="bg-pink-600 px-3 py-2 max-md:p-1 max-md:text-xs hover:bg-sky-500 duration-300"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={() =>
                  setProperty({
                    nature: "2",
                    feature1: "ไม่จำกัดรายได้ครอบครัว",
                    feature2: "มีสัญชาติไทย",
                    feature3: "อายุไม่เกิน 30 ปีบริบูรณ์",
                    feature4:
                      "ต้องไม่เป็นผู้ปฏิบัติงานและรับเงินเดือนหรือค่าจ้างในหน่วยงานของรัฐหรือเอกชนในลักษณะเต็มเวลา",
                    feature5: "ไม่เคยสำเร็จการศึกษาระดับปริญญาตรี",
                    feature6: "ไม่เคยเป็นหรือเป็นผู้ผิดนัดชำระหนี้กองทุนฯ",
                    feature7: "สมัครเรียนในสาขาตามประกาศที่กองทุนฯ กำหนด",
                  })
                }
              >
                ผู้กู้ยืมฯ (ลักษณะที่ 2)
              </button>
              <button
                className="bg-pink-600 px-3 py-2 max-md:p-1 max-md:text-xs hover:bg-sky-500 duration-300"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={() =>
                  setProperty({
                    nature: "3",
                    feature1: "ไม่จำกัดรายได้ครอบครัว",
                    feature2: "มีสัญชาติไทย",
                    feature3: "อายุไม่เกิน 30 ปีบริบูรณ์",
                    feature4:
                      "ต้องไม่เป็นผู้ปฏิบัติงานและรับเงินเดือนหรือค่าจ้างในหน่วยงานของรัฐหรือเอกชนในลักษณะเต็มเวลา",
                    feature5: "ไม่เคยสำเร็จการศึกษาระดับปริญญาตรี",
                    feature6: "ไม่เคยเป็นหรือเป็นผู้ผิดนัดชำระหนี้กองทุนฯ",
                    feature7: "สมัครเรียนในสาขาตามประกาศที่กองทุนฯ กำหนด",
                  })
                }
              >
                ผู้กู้ยืมฯ (ลักษณะที่ 3)
              </button>
            </div>
          </figure>
        </article>

        <article className="flex justify-center items-center ">
          <figure className="max-w-7xl  w-full my-3 mx-2 ">
            <span className="text-2xl   max-md:text-xl">ปริญญาตรี2566</span>
            <p className="w-full h-1 bg-pink-600 mt-1"></p>
            <div className="mt-2 mb-2 max-md:text-sm">
              หลักสูตรและลักษณะการกู้ยืมกองทุนเงินให้กู้ยืมเพื่อการศึกษา
              ปีการศึกษา 2566
            </div>
            <div>
              <LoanfundTable />
            </div>
            <div className="mt-5">
              <p className="text-pink-600 text-2xl max-md:text-xl">
                หมายเหตุ :
              </p>
              <p className=" text-base max-md:text-sm">
                1. <span className="text-pink-600">Human*</span>{" "}
                คือสาขาที่ร่วมโครงการส่งเสริมการพัฒนาทุนมนุษย์{" "}
                <span className="text-pink-600">(Human Capital)</span> ผู้กู้ยืม
                รับเงื่อนไขพิเศษ 2 ต่อ{" "}
              </p>
              <p className=" text-base max-md:text-sm">-เมื่อจบการศึกษา</p>
              <p className=" text-base max-md:text-sm">
                -ต่อที่ 1 ลดเงินต้น 30%{" "}
              </p>
              <p className=" text-base max-md:text-sm">
                -ต่อที่ 2 ลดดอกเบี้ย 0.5% ต่อปี (จากปกติ 1% ต่อปี)
              </p>
              <p className="text-pink-600 text-2xl max-md:text-xl mt-2">
                เอกสารและขั้นตอนการกู้ยืม :
              </p>
              <div className="flex flex-col text-black  ">
                <Link
                  href={"/pages/RegisterLevel/LoanFund/DocumentsPage"}
                  className=" text-base max-md:text-sm  text-black no-underline "
                >
                  <span className="hover:text-pink-600">
                    เอกสารประกอบการยื่นคำขอกู้ยืม คลิก
                  </span>
                </Link>
                <Link
                  href={"/pages/RegisterLevel/LoanFund/StepPage"}
                  className=" text-base max-md:text-sm  text-black no-underline"
                >
                  <span className="hover:text-pink-600">
                    ขั้นตอนการยื่นกู้ในระบบ DSL คลิก
                  </span>
                </Link>
              </div>
              <p className="text-pink-600 text-2xl max-md:text-xl mt-3">
                ระบบกองทุนเงินให้กู้ยืมเพื่อการศึกษาแบบดิจิทัล :
              </p>
              <Link
                href={"https://wsa.dsl.studentloan.or.th/#/rms/rms-login"}
                className=" text-base max-md:text-sm  text-black no-underline"
              >
                <span className="hover:text-pink-600">
                  ระบบการกู้ยืม (DSL) : Digital Student Loan Fund System
                </span>
              </Link>
              <p className="text-pink-600 text-2xl max-md:text-xl mt-3">
              สอบถามรายละเอียดเพิ่มเติม :
              </p>
              <p className=" text-base max-md:text-sm">
              สำนักงานรับสมัครนักศึกษา ตึก 1 อาคารอาทิตย์ อุไรรัตน์ (BUILDING 1)
              </p>
              <p className=" text-base max-md:text-sm">
              มหาวิทยาลัยรังสิต 52 347 ถ. พหลโยธิน ตำบล หลักหก อำเภอเมืองปทุมธานี ปทุมธานี 12000
              </p>
              <p className=" text-base max-md:text-sm">
              โทร : 02-791-6000
              </p>
              <p className=" text-base max-md:text-sm">
              แฟ็กซ์ : 02-791-5577
              </p>
              <p className=" text-base max-md:text-sm">
              อีเมล : info@rsu.ac.th
              </p>
              <p className=" text-base max-md:text-sm">
              รับสมัครนักศึกษา : 02-791-5510 ต่อ 15
              </p>
            </div>
            <p className="w-full h-0.5 bg-pink-600 mt-4"></p>
          </figure>
        </article>
      </main>
      <Footer />
    </>
  );
}
